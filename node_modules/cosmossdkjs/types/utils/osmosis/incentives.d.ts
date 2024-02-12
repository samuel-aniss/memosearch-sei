/// <reference types="long" />
import { Coin } from "../../../types/proto/cosmos/base/v1beta1/coin";
import { QueryCondition } from "../../../types/proto/osmosis/lockup/lock";
import { CosmosChainClient } from "../../clients";
export declare function query_osmosis_incentives_moduleToDistributeCoins(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_incentives_moduleDistributedCoins(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_incentives_gaugeByID(client: CosmosChainClient, id: number): Promise<any>;
export declare function query_osmosis_incentives_gauges(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function query_osmosis_incentives_activeGauges(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function query_osmosis_incentives_activeGaugesPerDenom(client: CosmosChainClient, denom: string, offset?: number, limit?: number): Promise<any>;
export declare function query_osmosis_incentives_upcomingGauges(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function query_osmosis_incentives_upcomingGaugesPerDenom(client: CosmosChainClient, denom: string, offset?: number, limit?: number): Promise<any>;
export declare function query_osmosis_incentives_rewardsEst(client: CosmosChainClient, owner: string, lockIds: number[], endEpoch: number): Promise<any>;
export declare function query_osmosis_incentives_lockableDurations(client: CosmosChainClient): Promise<any>;
export declare function execute_osmosis_incentives_create_gauge(isPerpetual: boolean, owner: string, distributeTo: QueryCondition, coins: Coin[], startTime: Date, numEpochsPaidOver: Long): Promise<import("../../proto/osmosis/incentives/tx").MsgCreateGauge>;
export declare function execute_osmosis_incentives_add_to_gauge(owner: string, gaugeId: Long, rewards: Coin[]): Promise<import("../../proto/osmosis/incentives/tx").MsgAddToGauge>;
