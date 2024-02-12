export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: any;
        };
        authz: {
            v1beta1: any;
        };
        bank: {
            v1beta1: any;
        };
        distribution: {
            v1beta1: any;
        };
        evidence: {
            v1beta1: any;
        };
        feegrant: {
            v1beta1: any;
        };
        gov: {
            v1: any;
            v1beta1: any;
        };
        group: {
            v1: any;
        };
        mint: {
            v1beta1: any;
        };
        nft: {
            v1beta1: any;
        };
        params: {
            v1beta1: any;
        };
        slashing: {
            v1beta1: any;
        };
        staking: {
            v1beta1: any;
        };
        upgrade: {
            v1beta1: any;
        };
    };
    osmosis: {
        epochs: {
            v1beta1: import("./epochs/query.lcd").LCDQueryClient;
        };
        gamm: {
            v1beta1: import("./gamm/v1beta1/query.lcd").LCDQueryClient;
        };
        incentives: import("./incentives/query.lcd").LCDQueryClient;
        lockup: import("./lockup/query.lcd").LCDQueryClient;
        mint: {
            v1beta1: import("./mint/v1beta1/query.lcd").LCDQueryClient;
        };
        poolincentives: {
            v1beta1: import("./pool-incentives/v1beta1/query.lcd").LCDQueryClient;
        };
        superfluid: import("./superfluid/query.lcd").LCDQueryClient;
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/query.lcd").LCDQueryClient;
        };
        txfees: {
            v1beta1: import("./txfees/v1beta1/query.lcd").LCDQueryClient;
        };
    };
}>;
