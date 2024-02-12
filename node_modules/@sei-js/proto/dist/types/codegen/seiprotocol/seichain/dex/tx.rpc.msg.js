import * as _m0 from "protobufjs/minimal";
import { MsgPlaceOrders, MsgPlaceOrdersResponse, MsgCancelOrders, MsgCancelOrdersResponse, MsgRegisterContract, MsgRegisterContractResponse, MsgContractDepositRent, MsgContractDepositRentResponse, MsgUnregisterContract, MsgUnregisterContractResponse, MsgRegisterPairs, MsgRegisterPairsResponse, MsgUpdatePriceTickSize, MsgUpdateTickSizeResponse, MsgUpdateQuantityTickSize, MsgUnsuspendContract, MsgUnsuspendContractResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.placeOrders = this.placeOrders.bind(this);
        this.cancelOrders = this.cancelOrders.bind(this);
        this.registerContract = this.registerContract.bind(this);
        this.contractDepositRent = this.contractDepositRent.bind(this);
        this.unregisterContract = this.unregisterContract.bind(this);
        this.registerPairs = this.registerPairs.bind(this);
        this.updatePriceTickSize = this.updatePriceTickSize.bind(this);
        this.updateQuantityTickSize = this.updateQuantityTickSize.bind(this);
        this.unsuspendContract = this.unsuspendContract.bind(this);
    }
    placeOrders(request) {
        const data = MsgPlaceOrders.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "PlaceOrders", data);
        return promise.then(data => MsgPlaceOrdersResponse.decode(new _m0.Reader(data)));
    }
    cancelOrders(request) {
        const data = MsgCancelOrders.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "CancelOrders", data);
        return promise.then(data => MsgCancelOrdersResponse.decode(new _m0.Reader(data)));
    }
    registerContract(request) {
        const data = MsgRegisterContract.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "RegisterContract", data);
        return promise.then(data => MsgRegisterContractResponse.decode(new _m0.Reader(data)));
    }
    contractDepositRent(request) {
        const data = MsgContractDepositRent.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "ContractDepositRent", data);
        return promise.then(data => MsgContractDepositRentResponse.decode(new _m0.Reader(data)));
    }
    unregisterContract(request) {
        const data = MsgUnregisterContract.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "UnregisterContract", data);
        return promise.then(data => MsgUnregisterContractResponse.decode(new _m0.Reader(data)));
    }
    registerPairs(request) {
        const data = MsgRegisterPairs.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "RegisterPairs", data);
        return promise.then(data => MsgRegisterPairsResponse.decode(new _m0.Reader(data)));
    }
    updatePriceTickSize(request) {
        const data = MsgUpdatePriceTickSize.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "UpdatePriceTickSize", data);
        return promise.then(data => MsgUpdateTickSizeResponse.decode(new _m0.Reader(data)));
    }
    updateQuantityTickSize(request) {
        const data = MsgUpdateQuantityTickSize.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "UpdateQuantityTickSize", data);
        return promise.then(data => MsgUpdateTickSizeResponse.decode(new _m0.Reader(data)));
    }
    unsuspendContract(request) {
        const data = MsgUnsuspendContract.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.dex.Msg", "UnsuspendContract", data);
        return promise.then(data => MsgUnsuspendContractResponse.decode(new _m0.Reader(data)));
    }
}
