/// <reference types="long" />
import { Any } from "../../../../types/proto/google/protobuf/any";
import { CosmosChainClient } from "../../../clients";
export declare function query_ibc_core_client_clientState(client: CosmosChainClient, clientId: string): Promise<any>;
export declare function query_ibc_core_client_clientStates(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function query_ibc_core_client_consensusState(client: CosmosChainClient, clientId: string, revisionNumber: Long, revisionHeight: Long, latestHeight: boolean): Promise<any>;
export declare function query_ibc_core_client_consensusStates(client: CosmosChainClient, clientId: string, offset?: number, limit?: number): Promise<any>;
export declare function query_ibc_core_client_clientStatus(client: CosmosChainClient, clientId: string): Promise<any>;
export declare function query_ibc_core_client_clientParams(client: CosmosChainClient): Promise<any>;
export declare function query_ibc_core_client_upgradedClientState(client: CosmosChainClient): Promise<any>;
export declare function query_ibc_core_client_upgradedConsensusState(client: CosmosChainClient): Promise<any>;
export declare function execute_ibc_core_client_createClient(clientState: Any, consensusState: Any, signer: string): Promise<import("../../../proto/ibc/core/client/v1/tx").MsgCreateClient>;
export declare function execute_ibc_core_client_updateClient(clientId: string, header: Any, signer: string): Promise<import("../../../proto/ibc/core/client/v1/tx").MsgUpdateClient>;
export declare function execute_ibc_core_client_upgradeClient(clientId: string, clientState: Any, consensusState: Any, proofUpgradeClient: Uint8Array, proofUpgradeConsensusState: Uint8Array, signer: string): Promise<import("../../../proto/ibc/core/client/v1/tx").MsgUpgradeClient>;
export declare function execute_ibc_core_client_submitMisbehaviour(clientId: string, misbehaviour: Any, signer: string): Promise<import("../../../proto/ibc/core/client/v1/tx").MsgSubmitMisbehaviour>;
