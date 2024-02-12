/// <reference types="long" />
import { Coin } from "../../../../../types/proto/cosmos/base/v1beta1/coin";
import { Height } from "../../../../../types/proto/ibc/core/client/v1/client";
import { CosmosChainClient } from "../../../../clients";
export declare function query_ibc_applications_transfer_v1_denomTrace(client: CosmosChainClient, hash: string): Promise<any>;
export declare function query_ibc_applications_transfer_v1_denomTraces(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function query_ibc_applications_transfer_v1_params(client: CosmosChainClient): Promise<any>;
export declare function query_ibc_applications_transfer_v1_denomHash(client: CosmosChainClient, trace: string): Promise<any>;
export declare function execute_ibc_applications_transfer_v1_transfer(sourcePort: string, sourceChannel: string, token: Coin, sender: string, receiver: string, timeoutHeight: Height, timeoutTimestamp: Long): Promise<import("../../../../proto/ibc/applications/transfer/v1/tx").MsgTransfer>;
