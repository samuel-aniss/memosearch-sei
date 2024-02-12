/// <reference types="long" />
import { Height } from "../../../../types/proto/ibc/core/client/v1/client";
import { Counterparty, Version } from "../../../../types/proto/ibc/core/connection/v1/connection";
import { Any } from "../../../../types/proto/google/protobuf/any";
import { CosmosChainClient } from "../../../clients";
export declare function query_ibc_core_connection_connection(client: CosmosChainClient, connectionId: string): Promise<any>;
export declare function query_ibc_core_connection_connections(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function query_ibc_core_connection_clientConnections(client: CosmosChainClient, clientId: string): Promise<any>;
export declare function query_ibc_core_connection_connectionClientState(client: CosmosChainClient, connectionId: string): Promise<any>;
export declare function query_ibc_core_connection_connectionConsensusState(client: CosmosChainClient, connectionId: string, revisionNumber: Long, revisionHeight: Long): Promise<any>;
export declare function execute_ibc_core_connection_connectionOpenInit(clientId: string, counterparty: Counterparty, version: Version, delayPeriod: Long, signer: string): Promise<import("../../../proto/ibc/core/connection/v1/tx").MsgConnectionOpenInit>;
export declare function execute_ibc_core_connection_connectionOpenTry(clientId: string): Promise<import("../../../proto/ibc/core/connection/v1/tx").MsgConnectionOpenTry>;
export declare function execute_ibc_core_connection_connectionOpenAck(connectionId: string, counterpartyConnectionId: string, version: Version, clientState: Any, proofHeight: Height): Promise<import("../../../proto/ibc/core/connection/v1/tx").MsgConnectionOpenAck>;
export declare function execute_ibc_core_connection_connectionOpenConfirm(connectionId: string, proofAck: Uint8Array, proofHeight: Height, signer: string): Promise<import("../../../proto/ibc/core/connection/v1/tx").MsgConnectionOpenConfirm>;
