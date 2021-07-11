// GENERATED CODE -- DO NOT EDIT!

// package: myStockService
// file: myStockService.proto

import * as myStockService_pb from "./myStockService_pb";
import * as grpc from "grpc";

interface IStocksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getStockBySymbol: grpc.MethodDefinition<myStockService_pb.StockSymbol, myStockService_pb.theStock>;
  getStockbyName: grpc.MethodDefinition<myStockService_pb.StockName, myStockService_pb.theStock>;
  getStockPrice: grpc.MethodDefinition<myStockService_pb.StockSymbol, myStockService_pb.theStockPrice>;
}

export const StocksService: IStocksService;

export interface IStocksServer extends grpc.UntypedServiceImplementation {
  getStockBySymbol: grpc.handleUnaryCall<myStockService_pb.StockSymbol, myStockService_pb.theStock>;
  getStockbyName: grpc.handleUnaryCall<myStockService_pb.StockName, myStockService_pb.theStock>;
  getStockPrice: grpc.handleServerStreamingCall<myStockService_pb.StockSymbol, myStockService_pb.theStockPrice>;
}

export class StocksClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getStockBySymbol(argument: myStockService_pb.StockSymbol, callback: grpc.requestCallback<myStockService_pb.theStock>): grpc.ClientUnaryCall;
  getStockBySymbol(argument: myStockService_pb.StockSymbol, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<myStockService_pb.theStock>): grpc.ClientUnaryCall;
  getStockBySymbol(argument: myStockService_pb.StockSymbol, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<myStockService_pb.theStock>): grpc.ClientUnaryCall;
  getStockbyName(argument: myStockService_pb.StockName, callback: grpc.requestCallback<myStockService_pb.theStock>): grpc.ClientUnaryCall;
  getStockbyName(argument: myStockService_pb.StockName, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<myStockService_pb.theStock>): grpc.ClientUnaryCall;
  getStockbyName(argument: myStockService_pb.StockName, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<myStockService_pb.theStock>): grpc.ClientUnaryCall;
  getStockPrice(argument: myStockService_pb.StockSymbol, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<myStockService_pb.theStockPrice>;
  getStockPrice(argument: myStockService_pb.StockSymbol, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<myStockService_pb.theStockPrice>;
}
