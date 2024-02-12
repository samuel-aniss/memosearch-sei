import { Rpc } from "@osmonauts/helpers";
export const createRPCQueryClient = async ({ rpc }: { rpc: Rpc }) => ({
  // COSMWASM's WASM MODULE
  cosmwasm: {
    wasm: {
      v1: new (await import("./wasm/v1/query.rpc.query")).QueryClientImpl(rpc),
    },
  },
  // COSMOS MODULE
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    params: {
      v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
  },
  // OSMOSIS MODULE
  osmosis: { 
    epoches: {
      v1: new (await import("../osmosis/epochs/query.rpc.query")).QueryClientImpl(rpc),
    },
    gamm: {
      v1: new (await import("../osmosis/gamm/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    incentives: {
      v1: new (await import("../osmosis/incentives/query.rpc.query")).QueryClientImpl(rpc),
    },
    lockup: {
      v1: new (await import("../osmosis/lockup/query.rpc.query")).QueryClientImpl(rpc),
    },
    mint : {
      v1beta1: new (await import("../osmosis/mint/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    pool_incentives: {
      v1beta1: new (await import("../osmosis/pool-incentives/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    superfluid: {
      v1: new (await import("../osmosis/superfluid/query.rpc.query")).QueryClientImpl(rpc),
    },
    tokenfactory: {
      v1beta1: new (await import("../osmosis/tokenfactory/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
    txfees: {
      v1beta1: new (await import("../osmosis/txfees/v1beta1/query.rpc.query")).QueryClientImpl(rpc),
    },
  }
});
