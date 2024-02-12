import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.longBook = this.longBook.bind(this);
        this.longBookAll = this.longBookAll.bind(this);
        this.shortBook = this.shortBook.bind(this);
        this.shortBookAll = this.shortBookAll.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.getLatestPrice = this.getLatestPrice.bind(this);
        this.getPrices = this.getPrices.bind(this);
        this.getTwaps = this.getTwaps.bind(this);
        this.assetMetadata = this.assetMetadata.bind(this);
        this.assetList = this.assetList.bind(this);
        this.getRegisteredPairs = this.getRegisteredPairs.bind(this);
        this.getRegisteredContract = this.getRegisteredContract.bind(this);
        this.getOrders = this.getOrders.bind(this);
        this.getOrder = this.getOrder.bind(this);
        this.getHistoricalPrices = this.getHistoricalPrices.bind(this);
        this.getMarketSummary = this.getMarketSummary.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `sei-protocol/seichain/dex/params`;
        return await this.req.get(endpoint);
    }
    /* Queries a LongBook by id. */
    async longBook(params) {
        const endpoint = `sei-protocol/seichain/dex/long_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.price}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of LongBook items. */
    async longBookAll(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `sei-protocol/seichain/dex/long_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
        return await this.req.get(endpoint, options);
    }
    /* Queries a ShortBook by id. */
    async shortBook(params) {
        const endpoint = `sei-protocol/seichain/dex/short_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.price}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of ShortBook items. */
    async shortBookAll(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `sei-protocol/seichain/dex/short_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
        return await this.req.get(endpoint, options);
    }
    /* GetPrice */
    async getPrice(params) {
        const endpoint = `sei-protocol/seichain/dex/get_price/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.timestamp}`;
        return await this.req.get(endpoint);
    }
    /* GetLatestPrice */
    async getLatestPrice(params) {
        const endpoint = `sei-protocol/seichain/dex/get_latest_price/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
        return await this.req.get(endpoint);
    }
    /* GetPrices */
    async getPrices(params) {
        const endpoint = `sei-protocol/seichain/dex/get_prices/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
        return await this.req.get(endpoint);
    }
    /* GetTwaps */
    async getTwaps(params) {
        const endpoint = `sei-protocol/seichain/dex/get_twaps/${params.contractAddr}/${params.lookbackSeconds}`;
        return await this.req.get(endpoint);
    }
    /* Returns the metadata for a specified denom / display type */
    async assetMetadata(params) {
        const endpoint = `sei-protocol/seichain/dex/asset_list/${params.denom}`;
        return await this.req.get(endpoint);
    }
    /* Returns metadata for all the assets */
    async assetList(_params = {}) {
        const endpoint = `sei-protocol/seichain/dex/asset_list`;
        return await this.req.get(endpoint);
    }
    /* Returns all registered pairs for specified contract address */
    async getRegisteredPairs(params) {
        const options = {
            params: {}
        };
        if (typeof params?.contractAddr !== "undefined") {
            options.params.contractAddr = params.contractAddr;
        }
        const endpoint = `sei-protocol/seichain/dex/registered_pairs`;
        return await this.req.get(endpoint, options);
    }
    /* Returns registered contract information */
    async getRegisteredContract(params) {
        const endpoint = `sei-protocol/seichain/dex/registered_contract/${params.contractAddr}`;
        return await this.req.get(endpoint);
    }
    /* GetOrders */
    async getOrders(params) {
        const endpoint = `sei-protocol/seichain/dex/get_orders/${params.contractAddr}/${params.account}`;
        return await this.req.get(endpoint);
    }
    /* GetOrder */
    async getOrder(params) {
        const endpoint = `sei-protocol/seichain/dex/get_order_by_id/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* GetHistoricalPrices */
    async getHistoricalPrices(params) {
        const endpoint = `sei-protocol/seichain/dex/get_historical_prices/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.periodLengthInSeconds}/${params.numOfPeriods}`;
        return await this.req.get(endpoint);
    }
    /* GetMarketSummary */
    async getMarketSummary(params) {
        const endpoint = `sei-protocol/seichain/dex/get_market_summary/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.lookbackInSeconds}`;
        return await this.req.get(endpoint);
    }
}
