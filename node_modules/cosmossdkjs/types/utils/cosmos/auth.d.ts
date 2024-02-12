import { CosmosChainClient } from "../../clients";
export declare function query_cosmos_auth_account(client: CosmosChainClient, address: string): Promise<any>;
export declare function query_cosmos_auth_accounts(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function query_cosmos_auth_params(client: CosmosChainClient): Promise<any>;
