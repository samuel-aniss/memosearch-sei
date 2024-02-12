import * as _m0 from "protobufjs/minimal";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.connectionOpenInit = this.connectionOpenInit.bind(this);
        this.connectionOpenTry = this.connectionOpenTry.bind(this);
        this.connectionOpenAck = this.connectionOpenAck.bind(this);
        this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
    }
    connectionOpenInit(request) {
        const data = MsgConnectionOpenInit.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
        return promise.then(data => MsgConnectionOpenInitResponse.decode(new _m0.Reader(data)));
    }
    connectionOpenTry(request) {
        const data = MsgConnectionOpenTry.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
        return promise.then(data => MsgConnectionOpenTryResponse.decode(new _m0.Reader(data)));
    }
    connectionOpenAck(request) {
        const data = MsgConnectionOpenAck.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
        return promise.then(data => MsgConnectionOpenAckResponse.decode(new _m0.Reader(data)));
    }
    connectionOpenConfirm(request) {
        const data = MsgConnectionOpenConfirm.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
        return promise.then(data => MsgConnectionOpenConfirmResponse.decode(new _m0.Reader(data)));
    }
}
