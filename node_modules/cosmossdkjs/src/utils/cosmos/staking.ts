
import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import {CommissionRates, Description} from "../../../types/proto/cosmos/staking/v1beta1/staking";
import {Any} from "../../../types/proto/google/protobuf/any";
import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";


// Supported query interfaces - types/proto/cosmos/staking/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmos/staking/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::STAKING MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_cosmos_staking_validators(client: CosmosChainClient,
                                                      status: string,
                                                      offset?: number,
                                                      limit?: number
) {
    let response = await client.query.cosmos.staking.v1beta1.validators(
        cosmos.staking.v1beta1.QueryValidatorsRequest.fromPartial({
            status: status,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_staking_validator(client: CosmosChainClient, validatorAddr: string) {
    let response = await client.query.cosmos.staking.v1beta1.validator(
        cosmos.staking.v1beta1.QueryValidatorRequest.fromPartial({
            validatorAddr: validatorAddr,

        }),
    );
    return response;
}

export async function query_cosmos_staking_validator_delegations(client: CosmosChainClient,
                                                                 validatorAddr: string,
                                                                 offset?: number,
                                                                 limit?: number) {
    let response = await client.query.cosmos.staking.v1beta1.validatorDelegations(
        cosmos.staking.v1beta1.QueryValidatorDelegationsRequest.fromPartial({
            validatorAddr: validatorAddr,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_staking_validator_unbonding_delegations(client: CosmosChainClient,
                                                                           validatorAddr: string,
                                                                           offset?: number,
                                                                           limit?: number) {
    let response = await client.query.cosmos.staking.v1beta1.validatorUnbondingDelegations(
        cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest.fromPartial({
            validatorAddr: validatorAddr,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_staking_delegation(client: CosmosChainClient, delegatorAddr: string, validatorAddr: string) {
    let response = await client.query.cosmos.staking.v1beta1.delegation(
        cosmos.staking.v1beta1.QueryDelegationRequest.fromPartial({
            validatorAddr: validatorAddr,
            delegatorAddr: delegatorAddr
            ,
        }),
    );
    return response;
}

export async function query_cosmos_staking_unbonding_delegation(client: CosmosChainClient, delegatorAddr: string, validatorAddr: string) {
    let response = await client.query.cosmos.staking.v1beta1.unbondingDelegation(
        cosmos.staking.v1beta1.QueryUnbondingDelegationRequest.fromPartial({
            validatorAddr: validatorAddr,
            delegatorAddr: delegatorAddr
            ,
        }),
    );
    return response;
}

export async function query_cosmos_staking_delegator_delegations(client: CosmosChainClient,
                                                                 delegatorAddr: string,
                                                                 offset?: number,
                                                                 limit?: number) {
    let response = await client.query.cosmos.staking.v1beta1.delegatorDelegations(
        cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_staking_delegator_unbonding_delegations(client: CosmosChainClient,
                                                                           delegatorAddr: string,
                                                                           offset?: number,
                                                                           limit?: number) {
    let response = await client.query.cosmos.staking.v1beta1.delegatorUnbondingDelegations(
        cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_staking_redelegations(client: CosmosChainClient,
                                                         delegatorAddr: string,
                                                         srcValidatorAddr: string,
                                                         dstValidatorAddr: string,
                                                         offset?: number,
                                                         limit?: number) {
    let response = await client.query.cosmos.staking.v1beta1.redelegations(
        cosmos.staking.v1beta1.QueryRedelegationsRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            srcValidatorAddr: srcValidatorAddr,
            dstValidatorAddr: dstValidatorAddr,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

//delegatorValidators

export async function query_cosmos_staking_delegator_validators(client: CosmosChainClient,
                                                                delegatorAddr: string,
                                                                offset?: number,
                                                                limit?: number) {
    let response = await client.query.cosmos.staking.v1beta1.delegatorValidators(
        cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest.fromPartial({
            delegatorAddr: delegatorAddr,

            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_staking_delegator_validator(client: CosmosChainClient,
                                                               delegatorAddr: string,
                                                               validatorAddr: string,
) {
    let response = await client.query.cosmos.staking.v1beta1.delegatorValidator(
        cosmos.staking.v1beta1.QueryDelegatorValidatorRequest.fromPartial({
            delegatorAddr: delegatorAddr,
            validatorAddr: validatorAddr,


        }),
    );
    return response;
}

export async function query_cosmos_staking_historical_info(client: CosmosChainClient, height: Long) {
    let response = await client.query.cosmos.staking.v1beta1.historicalInfo(
        cosmos.staking.v1beta1.QueryHistoricalInfoRequest.fromPartial({
            height: height,
        }),
    );
    return response;
}


export async function query_cosmos_staking_pool(client: CosmosChainClient, poolId: Long) {
    let response = await client.query.cosmos.staking.v1beta1.pool(
        cosmos.staking.v1beta1.QueryPoolRequest.fromPartial({
            poolId: poolId,
        }),
    );
    return response;
}

export async function query_cosmos_staking_params(client: CosmosChainClient) {
    let response = await client.query.cosmos.staking.v1beta1.params(
        cosmos.staking.v1beta1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}


//---------------------------------------------
// COSMOS::STAKING MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgCreateValidator
export async function execute_cosmos_staking_create_validator(
    description: Description,
    commission: CommissionRates,
    minSelfDelegation: string,
    delegatorAddress: string,
    validatorAddress: string,
    pubkey: Any,
    value: Coin,
) {
    let msg = cosmos.staking.v1beta1.MsgCreateValidator.fromPartial({
        description,
        commission,
        minSelfDelegation,
        delegatorAddress,
        validatorAddress,
        pubkey,
        value,
    });
    return msg;
}

//MsgEditValidator
export async function execute_cosmos_staking_edit_validator(
    description: Description,
    validatorAddress: string,
) {
    let msg = cosmos.staking.v1beta1.MsgEditValidator.fromPartial({
        description,
        validatorAddress,
    });
    return msg;
}

//MsgDelegate
export async function execute_cosmos_staking_delegate(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin,
) {
    let msg = cosmos.staking.v1beta1.MsgDelegate.fromPartial({
        delegatorAddress,
        validatorAddress,
        amount,
    });
    return msg;
}

export async function execute_cosmos_staking_begin_redelegate(
    delegatorAddress: string,
    validatorSrcAddress: string,
    validatorDstAddress: string,
    amount: Coin,
) {
    let msg = cosmos.staking.v1beta1.MsgBeginRedelegate.fromPartial({
        delegatorAddress,
        validatorSrcAddress,
        validatorDstAddress,
        amount,
    });
    return msg;
}

export async function execute_cosmos_staking_undelegate(
    delegatorAddress: string,
    validatorAddress: string,
    amount: Coin
) {
    let msg = cosmos.staking.v1beta1.MsgUndelegate.fromPartial({
        delegatorAddress,
        validatorAddress,
        amount,
    });
    return msg;
}
