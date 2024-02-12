import {Duration} from "../../../types/proto/google/protobuf/duration";
import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import {CosmosChainClient} from "../../clients";
import {cosmos, osmosis} from "../../proto";

// Supported query interfaces - types/proto/osmosis/superfluid/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/superfluid/tx.rpc.msg.d.ts

//---------------------------------------------
// OSMOSIS::SUPERFLUID MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_osmosis_superfluid_params(client: CosmosChainClient) {
    let response = await client.query.osmosis.superfluid.params(
        osmosis.superfluid.QueryParamsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_superfluid_assetType(client: CosmosChainClient, denom: string) {
    let response = await client.query.osmosis.superfluid.assetType(
        osmosis.superfluid.AllAssetsRequest.fromPartial({
            denom,
        })
    )
    return response;
}

export async function query_osmosis_superfluid_allAssets(client: CosmosChainClient) {
    let response = await client.query.osmosis.superfluid.allAssets(
        osmosis.superfluid.AllAssetsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_superfluid_assetMultiplier(client: CosmosChainClient, denom: string) {
    let response = await client.query.osmosis.superfluid.assetMultiplier(
        osmosis.superfluid.AssetMultiplierRequest.fromPartial({
            denom,
        })
    )
    return response;
}

export async function query_osmosis_superfluid_allIntermediaryAccounts(client: CosmosChainClient, offset?: number, limit?: number) {
    let response = await client.query.osmosis.superfluid.allIntermediaryAccounts(
        osmosis.superfluid.AllIntermediaryAccountsRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),

        })
    )
    return response;
}

export async function query_osmosis_superfluid_connectedIntermediaryAccountr(client: CosmosChainClient, denom: string) {
    let response = await client.query.osmosis.superfluid.connectedIntermediaryAccount(
        osmosis.superfluid.AssetMultiplierRequest.fromPartial({
            denom,
        })
    )
    return response;
}

export async function query_osmosis_superfluid_totalSuperfluidDelegations(client: CosmosChainClient) {
    let response = await client.query.osmosis.superfluid.totalSuperfluidDelegations(
        osmosis.superfluid.TotalSuperfluidDelegationsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_superfluid_superfluidDelegationAmount(client: CosmosChainClient, delegatorAddress: string,
                                                                          validatorAddress: string,
                                                                          denom: string) {
    let response = await client.query.osmosis.superfluid.superfluidDelegationAmount(
        osmosis.superfluid.SuperfluidDelegationAmountRequest.fromPartial({
            delegatorAddress,
            validatorAddress,
            denom,

        })
    )
    return response;
}

export async function query_osmosis_superfluid_superfluidUndelegationsByDelegator(client: CosmosChainClient, delegatorAddress: string,
                                                                                  denom: string) {
    let response = await client.query.osmosis.superfluid.superfluidUndelegationsByDelegator(
        osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest.fromPartial({
            delegatorAddress,
            denom,

        })
    )
    return response;
}

export async function query_osmosis_superfluid_superfluidDelegationsByDelegator(client: CosmosChainClient, delegatorAddress: string,
) {
    let response = await client.query.osmosis.superfluid.superfluidDelegationsByDelegator(
        osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest.fromPartial({
            delegatorAddress,
        })
    )
    return response;
}


export async function query_osmosis_superfluid_superfluidDelegationsByValidatorDenom(client: CosmosChainClient, validatorAddress: string,
                                                                                     denom: string) {
    let response = await client.query.osmosis.superfluid.superfluidDelegationsByValidatorDenom(
        osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest.fromPartial({
            validatorAddress,
            denom,

        })
    )
    return response;
}

export async function query_osmosis_superfluid_estimateSuperfluidDelegatedAmountByValidatorDenom(client: CosmosChainClient, validatorAddress: string,
                                                                                                 denom: string) {
    let response = await client.query.osmosis.superfluid.estimateSuperfluidDelegatedAmountByValidatorDenom(
        osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromPartial({
            validatorAddress,
            denom,

        })
    )
    return response;
}

//---------------------------------------------
// OSMOSIS::SUPERFLUID MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgSuperfluidDelegate
export async function execute_osmosis_superfluid_superfluidDelegate(
    sender: string,
    lockId: number,
    valAddr: string,
) {
    let msg = osmosis.superfluid.MsgSuperfluidDelegate.fromPartial({

        sender,
        lockId,
        valAddr
    });
    return msg;
}

//MsgSuperfluidUndelegate
export async function execute_osmosis_superfluid_superfluidUndelegate(
    sender: string,
    lockId: number,
) {
    let msg = osmosis.superfluid.MsgSuperfluidUndelegate.fromPartial({

        sender,
        lockId,

    });
    return msg;
}

//MsgSuperfluidUnbondLock
export async function execute_osmosis_superfluid_superfluidUnbondLock(
    sender: string,
    lockId: number,
) {
    let msg = osmosis.superfluid.MsgSuperfluidUnbondLock.fromPartial({

        sender,
        lockId,

    });
    return msg;
}

//MsgLockAndSuperfluidDelegate
export async function execute_osmosis_superfluid_lockAndSuperfluidDelegate(
    sender: string,
    coins: Coin[],
    valAddr: string,
) {
    let msg = osmosis.superfluid.MsgLockAndSuperfluidDelegate.fromPartial({

        sender,
        coins,
        valAddr

    });
    return msg;
}

//MsgUnPoolWhitelistedPool
export async function execute_osmosis_superfluid_unPoolWhitelistedPool(
    sender: string,
    poolId: number
) {
    let msg = osmosis.superfluid.MsgUnPoolWhitelistedPool.fromPartial({

        sender,
        poolId,


    });
    return msg;
}


