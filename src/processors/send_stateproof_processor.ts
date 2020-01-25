/**
 * @license
 * The MIT License
 *
 * Copyright (c) 2019 Celer Network
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { ethers } from 'ethers';
import { LogDescription } from 'ethers/utils';

import { SingleSessionAppFactory } from '../abi/SingleSessionApp';
import { AccessSecretRegistryFactory } from '../abi/AccessSecretRegistry';
import { ContractsInfo } from '../api//contracts_info';
import { CryptoManager } from '../crypto/crypto_manager';
import { Database } from '../data/database';
import { MessageManager } from '../messaging/message_manager';
import { StateProof as OnchainStateProof} from '../protobufs/app_pb';
import { AppState } from '../protobufs/app_pb';
import {
    CelerMsg,
    StateProof,
    StateProofResponse
} from '../protobufs/message_pb';
import * as typeUtils from '../utils/types';
import { Config } from '../api/config';

const SEND_STATEPROOF_TIMEOUT = 10;
const WAIT_RESPONSE_INTERVAL = 10;

export class SendStateProofProcessor {
    private readonly messageManager: MessageManager;
    private readonly cryptoManager: CryptoManager;
    private readonly contractsInfo: ContractsInfo;
    private readonly config: Config;

    private currentResponse: StateProofResponse;

    constructor(
        messageManager: MessageManager,
        cryptoManager: CryptoManager,
        contractsInfo: ContractsInfo,
        config: Config
    ) {
        this.messageManager = messageManager;
        this.cryptoManager = cryptoManager;
        this.contractsInfo = contractsInfo;
        this.config = config;
    }

    async SendStateProof(
        nonce: number,
        state: Uint8Array | string,
    ): Promise<string> {
        const singleSessionApp = SingleSessionAppFactory.connect(
            this.contractsInfo.singleSessionAppAddress,
            this.cryptoManager.provider
        );
        const accessSecretRegistry = AccessSecretRegistryFactory.connect(
            this.contractsInfo.accessSecretRegistryAddress,
            this.cryptoManager.provider
        );

        let owner = await accessSecretRegistry.functions.getOwner();
        const selfAddress = await this.cryptoManager.signer.getAddress();
        if(owner !== selfAddress){
            throw new Error('selfAddress is not owner')
        };

        let seqNum = await singleSessionApp.functions.getSeqNum();
        seqNum = seqNum.add(1);

        const appState = new AppState();
        appState.setNonce(nonce);
        appState.setSeqNum(seqNum);
        appState.setState(state);
        appState.setTimeout(SEND_STATEPROOF_TIMEOUT);
        
        const requesterSig = await this.cryptoManager.signHash(
            appState.serializeBinary()
        );
        const request = new StateProof();
        request.setAppState(appState);
        request.setRequesterSig(ethers.utils.arrayify(requesterSig));

        const message = new CelerMsg();
        message.setStateProof(request);
        await this.messageManager.sendMessage(message);

        while(!this.currentResponse) {
            await SendStateProofProcessor.sleep(WAIT_RESPONSE_INTERVAL);
        }
        const txHash = await this.sendStateProofTx(this.currentResponse);
        this.currentResponse = undefined;
        return txHash;
    }

    async handle(message: CelerMsg) : Promise<void> {
        const response = message.getStateProofResponse();

        // TODO: Validate 
        this.currentResponse = message.getStateProofResponse();
    }

    private static sleep(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    private async sendStateProofTx(
        response: StateProofResponse
    ): Promise<string> {
        const requesterSigBytes = response.getRequesterSig_asU8();
        const approverSigBytes = response.getApproverSig_asU8();
        const appState = response.getAppState();
        const serializedAppState = appState.serializeBinary();

        const selfAddress = await this.cryptoManager.signer.getAddress();
        const peerAddress = ethers.utils.getAddress(this.config.ospEthAddress);

        if(
            !CryptoManager.isSignatureValid(
                peerAddress,
                serializedAppState,
                ethers.utils.splitSignature(approverSigBytes)
            )
        ) {
            throw new Error('Invalid peer signature');
        }

        const sigsList = typeUtils.sortSignatureList(
            selfAddress,
            peerAddress,
            requesterSigBytes,
            approverSigBytes
        );
        const onChainRequest = new OnchainStateProof();
        onChainRequest.setAppState(serializedAppState);
        onChainRequest.setSigsList(sigsList);

        const singleSessionApp = SingleSessionAppFactory.connect(
            this.contractsInfo.singleSessionAppAddress,
            this.cryptoManager.provider
        );

        const tx = await singleSessionApp.functions.intendSettle(
            onChainRequest.serializeBinary()
        );
        const receipt = await tx.wait();
        if (receipt.status == 0){
            throw new Error(`SendStateProof tx ${tx.hash} failed`);
        }
        const singleSessionAppInterface = singleSessionApp.interface;
        const event = receipt.events;
        if(event.topics[0] === singleSessionAppInterface.events.IntendSettle) {
            return;
        }
        return tx.hash;
    }
    
}