import { Rpc } from "@osmonauts/helpers";
export declare const createRPCQueryClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmwasm: {
        wasm: {
            v1: import("./wasm/v1/query.rpc.query").QueryClientImpl;
        };
    };
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
        };
        params: {
            v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
        };
    };
    osmosis: {
        epoches: {
            v1: import("../osmosis/epochs/query.rpc.query").QueryClientImpl;
        };
        gamm: {
            v1: import("../osmosis/gamm/v1beta1/query.rpc.query").QueryClientImpl;
        };
        incentives: {
            v1: import("../osmosis/incentives/query.rpc.query").QueryClientImpl;
        };
        lockup: {
            v1: import("../osmosis/lockup/query.rpc.query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../osmosis/mint/v1beta1/query.rpc.query").QueryClientImpl;
        };
        pool_incentives: {
            v1beta1: import("../osmosis/pool-incentives/v1beta1/query.rpc.query").QueryClientImpl;
        };
        superfluid: {
            v1: import("../osmosis/superfluid/query.rpc.query").QueryClientImpl;
        };
        tokenfactory: {
            v1beta1: import("../osmosis/tokenfactory/v1beta1/query.rpc.query").QueryClientImpl;
        };
        txfees: {
            v1beta1: import("../osmosis/txfees/v1beta1/query.rpc.query").QueryClientImpl;
        };
    };
}>;
