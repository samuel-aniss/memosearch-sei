export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.epoch = this.epoch.bind(this);
        this.params = this.params.bind(this);
    }
    /* Query the epoch in the chain */
    async epoch(_params = {}) {
        const endpoint = `sei-protocol/seichain/epoch/epoch`;
        return await this.req.get(endpoint);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `sei-protocol/seichain/epoch/params`;
        return await this.req.get(endpoint);
    }
}
