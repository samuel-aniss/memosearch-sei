import {Coin} from "../../../../types/proto/cosmos/base/v1beta1/coin";
import {Height} from "../../../../types/proto/ibc/core/client/v1/client";
import {Counterparty, Version} from "../../../../types/proto/ibc/core/connection/v1/connection";
import {Any} from "../../../../types/proto/google/protobuf/any";
import {CosmosChainClient} from "../../../clients";
import {cosmos, ibc} from "../../../proto";

// Supported query interfaces - types/proto/ibc/core/connection/v1/query.rpc.query.d.ts

//---------------------------------------------
// IBC::CONNECTION MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_ibc_core_connection_connection(client: CosmosChainClient, connectionId: string) {
    let response = await client.query.ibc.core.connection.v1.connection(
        ibc.core.connection.v1.QueryConnectionRequest.fromPartial({
            connectionId,
        }),
    );
    return response;
}

export async function query_ibc_core_connection_connections(client: CosmosChainClient, offset?: number,
                                                            limit?: number) {
    let response = await client.query.ibc.core.connection.v1.connections(
        ibc.core.connection.v1.QueryConnectionsRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_ibc_core_connection_clientConnections(client: CosmosChainClient, clientId: string) {
    let response = await client.query.ibc.core.connection.v1.clientConnections(
        ibc.core.connection.v1.QueryClientConnectionsRequest.fromPartial({
            clientId,
        }),
    );
    return response;
}

export async function query_ibc_core_connection_connectionClientState(client: CosmosChainClient, connectionId: string) {
    let response = await client.query.ibc.core.connection.v1.connectionClientState(
        ibc.core.connection.v1.QueryConnectionClientStateRequest.fromPartial({
            connectionId,
        }),
    );
    return response;
}

export async function query_ibc_core_connection_connectionConsensusState(client: CosmosChainClient, connectionId: string, revisionNumber: Long,
                                                                         revisionHeight: Long) {
    let response = await client.query.ibc.core.connection.v1.connectionConsensusState(
        ibc.core.connection.v1.QueryConnectionConsensusStateRequest.fromPartial({
            connectionId,
            revisionNumber,
            revisionHeight,
        }),
    );
    return response;
}


// Supported transaction interfaces - types/proto/ibc/core/connection/v1/tx.rpc.msg.d.ts


//---------------------------------------------
// IBC::CONNECTION MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgConnectionOpenInit
export async function execute_ibc_core_connection_connectionOpenInit(
    clientId: string,
    counterparty: Counterparty,
    version: Version,
    delayPeriod: Long,
    signer: string,
) {
    let msg = ibc.core.connection.v1.MsgConnectionOpenInit.fromPartial({
        clientId,
        counterparty,
        version,
        delayPeriod,
        signer
    });
    return msg;
}

//MsgConnectionOpenTry
export async function execute_ibc_core_connection_connectionOpenTry(
    clientId: string,
) {
    let msg = ibc.core.connection.v1.MsgConnectionOpenTry.fromPartial({
        clientId,

    });
    return msg;
}

//MsgConnectionOpenAck
export async function execute_ibc_core_connection_connectionOpenAck(
    connectionId: string,
    counterpartyConnectionId: string,
    version: Version,
    clientState: Any,
    proofHeight: Height,
) {
    let msg = ibc.core.connection.v1.MsgConnectionOpenAck.fromPartial({

        connectionId,
        counterpartyConnectionId,
        version,
        clientState,
        proofHeight

    });
    return msg;
}

//MsgConnectionOpenConfirm
export async function execute_ibc_core_connection_connectionOpenConfirm(
    connectionId: string,
    proofAck: Uint8Array,
    proofHeight: Height,
    signer: string,
) {
    let msg = ibc.core.connection.v1.MsgConnectionOpenConfirm.fromPartial({

        connectionId,
        proofAck,
        proofHeight,
        signer

    });
    return msg;
}
