import * as _m0 from "protobufjs/minimal";
import { MsgTransfer, MsgTransferResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.transfer = this.transfer.bind(this);
    }
    transfer(request) {
        const data = MsgTransfer.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
        return promise.then(data => MsgTransferResponse.decode(new _m0.Reader(data)));
    }
}
