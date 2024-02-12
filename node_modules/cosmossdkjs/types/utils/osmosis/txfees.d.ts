import { CosmosChainClient } from "../../clients";
export declare function query_osmosis_txfees_feeTokens(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_txfees_denomSpotPrice(client: CosmosChainClient, denom: string): Promise<any>;
export declare function query_osmosis_txfees_denomPoolId(client: CosmosChainClient, denom: string): Promise<any>;
export declare function query_osmosis_txfees_baseDenom(client: CosmosChainClient): Promise<any>;
