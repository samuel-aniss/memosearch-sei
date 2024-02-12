import * as _m0 from "protobufjs/minimal";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgrade, MsgCancelUpgradeResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.softwareUpgrade = this.softwareUpgrade.bind(this);
        this.cancelUpgrade = this.cancelUpgrade.bind(this);
    }
    softwareUpgrade(request) {
        const data = MsgSoftwareUpgrade.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
        return promise.then(data => MsgSoftwareUpgradeResponse.decode(new _m0.Reader(data)));
    }
    cancelUpgrade(request) {
        const data = MsgCancelUpgrade.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
        return promise.then(data => MsgCancelUpgradeResponse.decode(new _m0.Reader(data)));
    }
}
