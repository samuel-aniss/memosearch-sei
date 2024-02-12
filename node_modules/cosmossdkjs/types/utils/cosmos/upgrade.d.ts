import { CosmosChainClient } from "../../clients";
export declare function query_cosmos_upgrade_current_plan(client: CosmosChainClient): Promise<any>;
export declare function query_cosmos_upgrade_applied_plan(client: CosmosChainClient, name: string): Promise<any>;
export declare function query_cosmos_upgrade_upgraded_consensus_state(client: CosmosChainClient): Promise<any>;
export declare function query_cosmos_upgrade_module_versions(client: CosmosChainClient, moduleName: string): Promise<any>;
