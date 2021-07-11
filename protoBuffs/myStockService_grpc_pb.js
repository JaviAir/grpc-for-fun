// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var myStockService_pb = require('./myStockService_pb.js');

function serialize_myStockService_StockName(arg) {
  if (!(arg instanceof myStockService_pb.StockName)) {
    throw new Error('Expected argument of type myStockService.StockName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myStockService_StockName(buffer_arg) {
  return myStockService_pb.StockName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myStockService_StockSymbol(arg) {
  if (!(arg instanceof myStockService_pb.StockSymbol)) {
    throw new Error('Expected argument of type myStockService.StockSymbol');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myStockService_StockSymbol(buffer_arg) {
  return myStockService_pb.StockSymbol.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myStockService_theStock(arg) {
  if (!(arg instanceof myStockService_pb.theStock)) {
    throw new Error('Expected argument of type myStockService.theStock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myStockService_theStock(buffer_arg) {
  return myStockService_pb.theStock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myStockService_theStockPrice(arg) {
  if (!(arg instanceof myStockService_pb.theStockPrice)) {
    throw new Error('Expected argument of type myStockService.theStockPrice');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myStockService_theStockPrice(buffer_arg) {
  return myStockService_pb.theStockPrice.deserializeBinary(new Uint8Array(buffer_arg));
}


var StocksService = exports.StocksService = {
  getStockBySymbol: {
    path: '/myStockService.Stocks/GetStockBySymbol',
    requestStream: false,
    responseStream: false,
    requestType: myStockService_pb.StockSymbol,
    responseType: myStockService_pb.theStock,
    requestSerialize: serialize_myStockService_StockSymbol,
    requestDeserialize: deserialize_myStockService_StockSymbol,
    responseSerialize: serialize_myStockService_theStock,
    responseDeserialize: deserialize_myStockService_theStock,
  },
  getStockbyName: {
    path: '/myStockService.Stocks/GetStockbyName',
    requestStream: false,
    responseStream: false,
    requestType: myStockService_pb.StockName,
    responseType: myStockService_pb.theStock,
    requestSerialize: serialize_myStockService_StockName,
    requestDeserialize: deserialize_myStockService_StockName,
    responseSerialize: serialize_myStockService_theStock,
    responseDeserialize: deserialize_myStockService_theStock,
  },
  getStockPrice: {
    path: '/myStockService.Stocks/GetStockPrice',
    requestStream: false,
    responseStream: true,
    requestType: myStockService_pb.StockSymbol,
    responseType: myStockService_pb.theStockPrice,
    requestSerialize: serialize_myStockService_StockSymbol,
    requestDeserialize: deserialize_myStockService_StockSymbol,
    responseSerialize: serialize_myStockService_theStockPrice,
    responseDeserialize: deserialize_myStockService_theStockPrice,
  },
};

exports.StocksClient = grpc.makeGenericClientConstructor(StocksService);
