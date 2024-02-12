import * as _m0 from "protobufjs/minimal";
import { MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse } from "./tx";
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.aggregateExchangeRateVote = this.aggregateExchangeRateVote.bind(this);
        this.delegateFeedConsent = this.delegateFeedConsent.bind(this);
    }
    aggregateExchangeRateVote(request) {
        const data = MsgAggregateExchangeRateVote.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Msg", "AggregateExchangeRateVote", data);
        return promise.then(data => MsgAggregateExchangeRateVoteResponse.decode(new _m0.Reader(data)));
    }
    delegateFeedConsent(request) {
        const data = MsgDelegateFeedConsent.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Msg", "DelegateFeedConsent", data);
        return promise.then(data => MsgDelegateFeedConsentResponse.decode(new _m0.Reader(data)));
    }
}
