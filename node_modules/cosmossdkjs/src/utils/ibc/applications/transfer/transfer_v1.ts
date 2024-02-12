
import {Coin} from "../../../../../types/proto/cosmos/base/v1beta1/coin";

import {Height} from "../../../../../types/proto/ibc/core/client/v1/client";
import {CosmosChainClient} from "../../../../clients";
import {cosmos, ibc} from "../../../../proto";


// Supported query interfaces - types/proto/ibc/applications/transfer/v1/query.rpc.query.d.ts

//---------------------------------------------
// IBC::TRANSFER_V1 MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_ibc_applications_transfer_v1_denomTrace(client: CosmosChainClient, hash: string) {
    let response = await client.query.ibc.applications.transfer.v1.denomTrace(
        ibc.applications.transfer.v1.QueryDenomTraceRequest.fromPartial({
            hash,
        }),
    );
    return response;
}

export async function query_ibc_applications_transfer_v1_denomTraces(client: CosmosChainClient, offset?: number,
                                                                     limit?: number) {
    let response = await client.query.ibc.applications.transfer.v1.denomTraces(
        ibc.applications.transfer.v1.QueryDenomTracesRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_ibc_applications_transfer_v1_params(client: CosmosChainClient) {
    let response = await client.query.ibc.applications.transfer.v1.params(
        ibc.applications.transfer.v1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}

export async function query_ibc_applications_transfer_v1_denomHash(client: CosmosChainClient, trace: string) {
    let response = await client.query.ibc.applications.transfer.v1.denomHash(
        ibc.applications.transfer.v1.QueryDenomHashRequest.fromPartial({
            trace
        }),
    );
    return response;
}


// Supported transaction interfaces - types/proto/ibc/applications/transfer/v1/tx.rpc.msg.d.ts

//---------------------------------------------
// IBC::BANK MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgTransfer
export async function execute_ibc_applications_transfer_v1_transfer(
    sourcePort: string,
    sourceChannel: string,
    token: Coin,
    sender: string,
    receiver: string,
    timeoutHeight: Height,
    timeoutTimestamp: Long,
) {
    let msg = ibc.applications.transfer.v1.MsgTransfer.fromPartial({
        sourcePort,
        sourceChannel,
        token,
        sender,
        receiver,
        timeoutHeight,
        timeoutTimestamp
    });
    return msg;
}

