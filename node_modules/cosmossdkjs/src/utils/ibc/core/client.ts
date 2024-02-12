import {Counterparty, Version} from "../../../../types/proto/ibc/core/connection/v1/connection";
import {Any} from "../../../../types/proto/google/protobuf/any";
import {CosmosChainClient} from "../../../clients";
import {cosmos, ibc} from "../../../proto";

// Supported query interfaces - types/proto/ibc/core/client/v1/query.rpc.query.d.ts

//---------------------------------------------
// IBC::CLIENT MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_ibc_core_client_clientState(client: CosmosChainClient, clientId: string) {
    let response = await client.query.ibc.core.client.v1.clientState(
        ibc.core.client.v1.QueryClientStateRequest.fromPartial({
            clientId,
        }),
    );
    return response;
}

export async function query_ibc_core_client_clientStates(client: CosmosChainClient, offset?: number,
                                                         limit?: number) {
    let response = await client.query.ibc.core.client.v1.clientStates(
        ibc.core.client.v1.QueryClientStatesRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_ibc_core_client_consensusState(client: CosmosChainClient, clientId: string, revisionNumber: Long, revisionHeight: Long, latestHeight: boolean) {
    let response = await client.query.ibc.core.client.v1.consensusState(
        ibc.core.client.v1.QueryConsensusStateRequest.fromPartial({
            clientId,
            revisionNumber,
            revisionHeight,
            latestHeight
        }),
    );
    return response;
}

export async function query_ibc_core_client_consensusStates(client: CosmosChainClient, clientId: string, offset?: number,
                                                            limit?: number) {
    let response = await client.query.ibc.core.client.v1.consensusStates(
        ibc.core.client.v1.QueryConsensusStatesRequest.fromPartial({
            clientId,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}


export async function query_ibc_core_client_clientStatus(client: CosmosChainClient, clientId: string,) {
    let response = await client.query.ibc.core.client.v1.clientStatus(
        ibc.core.client.v1.QueryClientStatusRequest.fromPartial({
            clientId,

        }),
    );
    return response;
}

export async function query_ibc_core_client_clientParams(client: CosmosChainClient) {
    let response = await client.query.ibc.core.client.v1.clientParams(
        ibc.core.client.v1.QueryClientParamsRequest.fromPartial({}),
    );
    return response;
}

export async function query_ibc_core_client_upgradedClientState(client: CosmosChainClient) {
    let response = await client.query.ibc.core.client.v1.upgradedClientState(
        ibc.core.client.v1.QueryUpgradedClientStateRequest.fromPartial({}),
    );
    return response;
}

export async function query_ibc_core_client_upgradedConsensusState(client: CosmosChainClient) {
    let response = await client.query.ibc.core.client.v1.upgradedConsensusState(
        ibc.core.client.v1.QueryUpgradedConsensusStateRequest.fromPartial({}),
    );
    return response;
}

// Supported transaction interfaces - types/proto/ibc/core/client/v1/tx.rpc.msg.d.ts

//---------------------------------------------
// IBC::CLIENT MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgCreateClient
export async function execute_ibc_core_client_createClient(
    clientState: Any,
    consensusState: Any,
    signer: string
) {
    let msg = ibc.core.client.v1.MsgCreateClient.fromPartial({
        clientState,
        consensusState,
        signer
    });
    return msg;
}

//MsgUpdateClient
export async function execute_ibc_core_client_updateClient(
    clientId: string,
    header: Any,
    signer: string
) {
    let msg = ibc.core.client.v1.MsgUpdateClient.fromPartial({
        clientId,
        header,
        signer
    });
    return msg;
}

//MsgUpgradeClient
export async function execute_ibc_core_client_upgradeClient(
    clientId: string,
    clientState: Any,
    consensusState: Any,
    proofUpgradeClient: Uint8Array,
    proofUpgradeConsensusState: Uint8Array,
    signer: string
) {
    let msg = ibc.core.client.v1.MsgUpgradeClient.fromPartial({
        clientId,
        clientState,
        consensusState,
        proofUpgradeClient,
        proofUpgradeConsensusState,
        signer
    });
    return msg;
}

//MsgSubmitMisbehaviour
export async function execute_ibc_core_client_submitMisbehaviour(
    clientId: string,
    misbehaviour: Any,
    signer: string,
) {
    let msg = ibc.core.client.v1.MsgSubmitMisbehaviour.fromPartial({
        clientId,
        misbehaviour,
        signer
    });
    return msg;
}




