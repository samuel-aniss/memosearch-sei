/// <reference types="long" />
import { CosmosChainClient } from "../../clients";
export declare function query_osmosis_pool_incentives_gaugeIds(client: CosmosChainClient, poolId: Long): Promise<any>;
export declare function query_osmosis_pool_incentives_distrInfo(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_pool_incentives_params(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_pool_incentives_lockableDurations(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_pool_incentives_incentivizedPools(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_pool_incentives_externalIncentiveGauges(client: CosmosChainClient): Promise<any>;
