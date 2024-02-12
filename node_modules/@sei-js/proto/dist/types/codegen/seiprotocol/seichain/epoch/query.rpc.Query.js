import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEpochRequest, QueryEpochResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.epoch = this.epoch.bind(this);
        this.params = this.params.bind(this);
    }
    epoch(request = {}) {
        const data = QueryEpochRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.epoch.Query", "Epoch", data);
        return promise.then(data => QueryEpochResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.epoch.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        epoch(request) {
            return queryService.epoch(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
