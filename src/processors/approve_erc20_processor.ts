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

import { ethers, Signer } from 'ethers';

import { Erc20Factory } from '../abi/Erc20Factory';
import { ContractsInfo } from '../api/contracts_info';

const APPROVAL_AMOUNT = ethers.utils.parseEther('1e32');

export class ApproveErc20Processor {
  private readonly signer: Signer;
  private readonly contractsInfo: ContractsInfo;

  constructor(signer: Signer, contractsInfo: ContractsInfo) {
    this.signer = signer;
    this.contractsInfo = contractsInfo;
  }

  async approveIfNecessary(tokenAddress: string): Promise<string> {
    const signer = this.signer;
    const ledgerAddress = ethers.utils.getAddress(
      this.contractsInfo.celerLedgerAddress
    );
    const tokenContract = Erc20Factory.connect(tokenAddress, signer);

    const selfAddress = await signer.getAddress();
    const allowance = await tokenContract.functions.allowance(
      selfAddress,
      ledgerAddress
    );
    if (allowance.eq(APPROVAL_AMOUNT)) {
      return '';
    }

    const tx = await tokenContract.functions.approve(
      ledgerAddress,
      APPROVAL_AMOUNT
    );
    const receipt = await tx.wait();
    const txHash = tx.hash;
    if (receipt.status === 0) {
      throw new Error(`Approve tx ${txHash} failed`);
    }
    return txHash;
  }
}
