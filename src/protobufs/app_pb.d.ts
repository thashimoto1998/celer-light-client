// package: app
// file: app.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class AppState extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  getSeqNum(): number;
  setSeqNum(value: number): void;

  getState(): Uint8Array | string;
  getState_asU8(): Uint8Array;
  getState_asB64(): string;
  setState(value: Uint8Array | string): void;

  getTimeout(): number;
  setTimeout(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppState.AsObject;
  static toObject(includeInstance: boolean, msg: AppState): AppState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppState;
  static deserializeBinaryFromReader(message: AppState, reader: jspb.BinaryReader): AppState;
}

export namespace AppState {
  export type AsObject = {
    nonce: number,
    seqNum: number,
    state: Uint8Array | string,
    timeout: number,
  }
}

export class StateProof extends jspb.Message {
  getAppState(): Uint8Array | string;
  getAppState_asU8(): Uint8Array;
  getAppState_asB64(): string;
  setAppState(value: Uint8Array | string): void;

  clearSigsList(): void;
  getSigsList(): Array<Uint8Array | string>;
  getSigsList_asU8(): Array<Uint8Array>;
  getSigsList_asB64(): Array<string>;
  setSigsList(value: Array<Uint8Array | string>): void;
  addSigs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateProof.AsObject;
  static toObject(includeInstance: boolean, msg: StateProof): StateProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StateProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateProof;
  static deserializeBinaryFromReader(message: StateProof, reader: jspb.BinaryReader): StateProof;
}

export namespace StateProof {
  export type AsObject = {
    appState: Uint8Array | string,
    sigsList: Array<Uint8Array | string>,
  }
}

export class SessionQuery extends jspb.Message {
  getSession(): Uint8Array | string;
  getSession_asU8(): Uint8Array;
  getSession_asB64(): string;
  setSession(value: Uint8Array | string): void;

  getQuery(): Uint8Array | string;
  getQuery_asU8(): Uint8Array;
  getQuery_asB64(): string;
  setQuery(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SessionQuery): SessionQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionQuery;
  static deserializeBinaryFromReader(message: SessionQuery, reader: jspb.BinaryReader): SessionQuery;
}

export namespace SessionQuery {
  export type AsObject = {
    session: Uint8Array | string,
    query: Uint8Array | string,
  }
}

  export const soltype: jspb.ExtensionFieldInfo<string>;

