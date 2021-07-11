// package: myStockService
// file: myStockService.proto

import * as jspb from "google-protobuf";

export class StockSymbol extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockSymbol.AsObject;
  static toObject(includeInstance: boolean, msg: StockSymbol): StockSymbol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockSymbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockSymbol;
  static deserializeBinaryFromReader(message: StockSymbol, reader: jspb.BinaryReader): StockSymbol;
}

export namespace StockSymbol {
  export type AsObject = {
    symbol: string,
  }
}

export class StockName extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockName.AsObject;
  static toObject(includeInstance: boolean, msg: StockName): StockName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockName;
  static deserializeBinaryFromReader(message: StockName, reader: jspb.BinaryReader): StockName;
}

export namespace StockName {
  export type AsObject = {
    name: string,
  }
}

export class theStock extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): theStock.AsObject;
  static toObject(includeInstance: boolean, msg: theStock): theStock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: theStock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): theStock;
  static deserializeBinaryFromReader(message: theStock, reader: jspb.BinaryReader): theStock;
}

export namespace theStock {
  export type AsObject = {
    name: string,
    symbol: string,
    price: number,
  }
}

export class theStockPrice extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): theStockPrice.AsObject;
  static toObject(includeInstance: boolean, msg: theStockPrice): theStockPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: theStockPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): theStockPrice;
  static deserializeBinaryFromReader(message: theStockPrice, reader: jspb.BinaryReader): theStockPrice;
}

export namespace theStockPrice {
  export type AsObject = {
    price: number,
  }
}

