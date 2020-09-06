// package: todo
// file: todo/todo.proto

import * as jspb from "google-protobuf";

export class CreateToDo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateToDo.AsObject;
  static toObject(includeInstance: boolean, msg: CreateToDo): CreateToDo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateToDo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateToDo;
  static deserializeBinaryFromReader(message: CreateToDo, reader: jspb.BinaryReader): CreateToDo;
}

export namespace CreateToDo {
  export type AsObject = {
  }
}

