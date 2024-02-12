import { CosmosChainClient } from "../../clients";
export declare function query_cosmos_slashing_params(client: CosmosChainClient): Promise<any>;
export declare function query_cosmos_slashing_signing_info(client: CosmosChainClient, consAddress: string): Promise<any>;
export declare function query_cosmos_slashing_signing_infos(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function execute_cosmos_slashing_unjail(validatorAddr: string): Promise<import("../../proto/cosmos/slashing/v1beta1/tx").MsgUnjail>;
