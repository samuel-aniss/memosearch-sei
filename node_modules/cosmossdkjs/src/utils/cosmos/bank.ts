import {Any} from "cosmjs-types/google/protobuf/any.js";
import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import {Input, Output} from "../../../types/proto/cosmos/bank/v1beta1/bank";
import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

// Supported query interfaces - types/proto/cosmos/bank/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/bank/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::BANK MODULE - QUERY HELPERS
// --------------------------------------------
export async function query_cosmos_bank_balance(client: CosmosChainClient, address: string, denom: string) {
    let response = await client.query.cosmos.bank.v1beta1.balance(
        cosmos.bank.v1beta1.QueryBalanceRequest.fromPartial({
            address: address,
            denom: denom,
        }),
    );
    return response;
}

export async function query_cosmos_bank_all_balances(
    client: CosmosChainClient,
    address: string,
    offset?: number,
    limit?: number,
) {
    let response = await client.query.cosmos.bank.v1beta1.allBalances(
        cosmos.bank.v1beta1.QueryAllBalancesRequest.fromPartial({
            address: address,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_bank_total_supply(client: CosmosChainClient, offset?: number,
                                                     limit?: number,) {
    let response = await client.query.cosmos.bank.v1beta1.totalSupply(
        cosmos.bank.v1beta1.QueryTotalSupplyRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_bank_supply_of(
    client: CosmosChainClient, denom: string
) {
    let response = await client.query.cosmos.bank.v1beta1.supplyOf(
        cosmos.bank.v1beta1.QuerySupplyOfRequest.fromPartial({
            denom,

        }),
    );
    return response;
}

export async function query_cosmos_bank_params(client: CosmosChainClient) {
    let response = await client.query.cosmos.bank.v1beta1.params(
        cosmos.bank.v1beta1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}

export async function query_cosmos_bank_denom_metadata(client: CosmosChainClient, denom: string) {
    let response = await client.query.cosmos.bank.v1beta1.denomMetadata(
        cosmos.bank.v1beta1.QueryDenomMetadataRequest.fromPartial({
            denom,

        }),
    );
    return response;
}

export async function query_cosmos_bank_denoms_metadata(client: CosmosChainClient, offset?: number, limit?: number) {

    let response = await client.query.cosmos.bank.v1beta1.denomsMetadata(
        cosmos.bank.v1beta1.QueryDenomsMetadataRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}


//---------------------------------------------
// COSMOS::BANK MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgSend
export async function execute_cosmos_bank_send(
    fromAddress: string,
    toAddress: string,
    amount: Coin[],
) {
    let msg = cosmos.bank.v1beta1.MsgSend.fromPartial({
        fromAddress,
        toAddress,
        amount: amount,
    });
    return msg;
}

// MsgMultiSend
export async function execute_cosmos_bank_multi_send(
    inputs: Input[],
    outputs: Output[],
) {
    let msg = cosmos.bank.v1beta1.MsgMultiSend.fromPartial({
        inputs: inputs,
        outputs: outputs,
    });
    return msg;
}
