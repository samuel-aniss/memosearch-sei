import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryActivesRequest, QueryActivesResponse, QueryVoteTargetsRequest, QueryVoteTargetsResponse, QueryPriceSnapshotHistoryRequest, QueryPriceSnapshotHistoryResponse, QueryTwapsRequest, QueryTwapsResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryVotePenaltyCounterRequest, QueryVotePenaltyCounterResponse, QuerySlashWindowRequest, QuerySlashWindowResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.exchangeRate = this.exchangeRate.bind(this);
        this.exchangeRates = this.exchangeRates.bind(this);
        this.actives = this.actives.bind(this);
        this.voteTargets = this.voteTargets.bind(this);
        this.priceSnapshotHistory = this.priceSnapshotHistory.bind(this);
        this.twaps = this.twaps.bind(this);
        this.feederDelegation = this.feederDelegation.bind(this);
        this.votePenaltyCounter = this.votePenaltyCounter.bind(this);
        this.slashWindow = this.slashWindow.bind(this);
        this.params = this.params.bind(this);
    }
    exchangeRate(request) {
        const data = QueryExchangeRateRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "ExchangeRate", data);
        return promise.then(data => QueryExchangeRateResponse.decode(new _m0.Reader(data)));
    }
    exchangeRates(request = {}) {
        const data = QueryExchangeRatesRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "ExchangeRates", data);
        return promise.then(data => QueryExchangeRatesResponse.decode(new _m0.Reader(data)));
    }
    actives(request = {}) {
        const data = QueryActivesRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "Actives", data);
        return promise.then(data => QueryActivesResponse.decode(new _m0.Reader(data)));
    }
    voteTargets(request = {}) {
        const data = QueryVoteTargetsRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "VoteTargets", data);
        return promise.then(data => QueryVoteTargetsResponse.decode(new _m0.Reader(data)));
    }
    priceSnapshotHistory(request = {}) {
        const data = QueryPriceSnapshotHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "PriceSnapshotHistory", data);
        return promise.then(data => QueryPriceSnapshotHistoryResponse.decode(new _m0.Reader(data)));
    }
    twaps(request) {
        const data = QueryTwapsRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "Twaps", data);
        return promise.then(data => QueryTwapsResponse.decode(new _m0.Reader(data)));
    }
    feederDelegation(request) {
        const data = QueryFeederDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "FeederDelegation", data);
        return promise.then(data => QueryFeederDelegationResponse.decode(new _m0.Reader(data)));
    }
    votePenaltyCounter(request) {
        const data = QueryVotePenaltyCounterRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "VotePenaltyCounter", data);
        return promise.then(data => QueryVotePenaltyCounterResponse.decode(new _m0.Reader(data)));
    }
    slashWindow(request = {}) {
        const data = QuerySlashWindowRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "SlashWindow", data);
        return promise.then(data => QuerySlashWindowResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("seiprotocol.seichain.oracle.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        exchangeRate(request) {
            return queryService.exchangeRate(request);
        },
        exchangeRates(request) {
            return queryService.exchangeRates(request);
        },
        actives(request) {
            return queryService.actives(request);
        },
        voteTargets(request) {
            return queryService.voteTargets(request);
        },
        priceSnapshotHistory(request) {
            return queryService.priceSnapshotHistory(request);
        },
        twaps(request) {
            return queryService.twaps(request);
        },
        feederDelegation(request) {
            return queryService.feederDelegation(request);
        },
        votePenaltyCounter(request) {
            return queryService.votePenaltyCounter(request);
        },
        slashWindow(request) {
            return queryService.slashWindow(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
