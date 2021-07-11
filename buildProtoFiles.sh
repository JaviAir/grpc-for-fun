#!/bin/bash

PROTO_DIR=./protoBuffs
PROTO_FILE=myStockService.proto
PROTO_FILE2=users.proto

# first time GO dependencies:
# go get github.com/golang/protobuf/protoc-gen-go
# export PATH="$PATH:$(go env GOPATH)/bin"

# protoc --go_out=plugins=grpc:. ${PROTO_FILE}


# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Path to the grpc_node_plugin
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out="import_style=commonjs,binary:${PROTO_DIR}" \
    --ts_out="service=grpc-node:${PROTO_DIR}" \
    --grpc_out="${PROTO_DIR}" \
    myStockService.proto
