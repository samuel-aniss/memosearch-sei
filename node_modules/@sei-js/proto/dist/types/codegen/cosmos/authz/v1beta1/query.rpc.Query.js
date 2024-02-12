import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.grants = this.grants.bind(this);
        this.granterGrants = this.granterGrants.bind(this);
        this.granteeGrants = this.granteeGrants.bind(this);
    }
    grants(request) {
        const data = QueryGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
        return promise.then(data => QueryGrantsResponse.decode(new _m0.Reader(data)));
    }
    granterGrants(request) {
        const data = QueryGranterGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
        return promise.then(data => QueryGranterGrantsResponse.decode(new _m0.Reader(data)));
    }
    granteeGrants(request) {
        const data = QueryGranteeGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
        return promise.then(data => QueryGranteeGrantsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        grants(request) {
            return queryService.grants(request);
        },
        granterGrants(request) {
            return queryService.granterGrants(request);
        },
        granteeGrants(request) {
            return queryService.granteeGrants(request);
        }
    };
};
