import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import {QueryCondition} from "../../../types/proto/osmosis/lockup/lock";
import {CosmosChainClient} from "../../clients";
import {cosmos, osmosis} from "../../proto";

// Supported query interfaces - types/proto/osmosis/incentives/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/incentives/tx.rpc.msg.d.ts

//---------------------------------------------
// OSMOSIS::INCENTIVES MODULE - QUERY HELPERS
// --------------------------------------------


export async function query_osmosis_incentives_moduleToDistributeCoins(client: CosmosChainClient) {
    console.log(osmosis.incentives)
    let response = await client.query.osmosis.incentives.v1.moduleToDistributeCoins(
        osmosis.incentives.ModuleToDistributeCoinsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_incentives_moduleDistributedCoins(client: CosmosChainClient) {
    let response = await client.query.osmosis.incentives.v1.moduleDistributedCoins(
        osmosis.incentives.ModuleDistributedCoinsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_incentives_gaugeByID(client: CosmosChainClient, id: number) {
    let response = await client.query.osmosis.incentives.v1.gaugeByID(
        osmosis.incentives.GaugeByIDRequest.fromPartial({id: id})
    )
    return response;
}

export async function query_osmosis_incentives_gauges(client: CosmosChainClient, offset?: number,
                                                      limit?: number) {
    let response = await client.query.osmosis.incentives.v1.gauges(
        osmosis.incentives.GaugesRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    )
    return response;
}

export async function query_osmosis_incentives_activeGauges(client: CosmosChainClient, offset?: number,
                                                            limit?: number) {
    let response = await client.query.osmosis.incentives.v1.activeGauges(
        osmosis.incentives.ActiveGaugesRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    )
    return response;
}

export async function query_osmosis_incentives_activeGaugesPerDenom(client: CosmosChainClient, denom: string, offset?: number,
                                                                    limit?: number) {
    let response = await client.query.osmosis.incentives.v1.activeGaugesPerDenom(
        osmosis.incentives.ActiveGaugesPerDenomRequest.fromPartial({
            denom: denom,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    )
    return response;
}

export async function query_osmosis_incentives_upcomingGauges(client: CosmosChainClient, offset?: number,
                                                              limit?: number) {
    let response = await client.query.osmosis.incentives.v1.upcomingGauges(
        osmosis.incentives.UpcomingGaugesRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    )
    return response;
}

export async function query_osmosis_incentives_upcomingGaugesPerDenom(client: CosmosChainClient, denom: string, offset?: number,
                                                                      limit?: number) {
    let response = await client.query.osmosis.incentives.v1.upcomingGaugesPerDenom(
        osmosis.incentives.UpcomingGaugesPerDenomRequest.fromPartial({
            denom: denom,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    )
    return response;
}

export async function query_osmosis_incentives_rewardsEst(client: CosmosChainClient, owner: string, lockIds: number[], endEpoch: number) {
    let response = await client.query.osmosis.incentives.v1.rewardsEst(
        osmosis.incentives.RewardsEstRequest.fromPartial({owner: owner, lockIds: lockIds, endEpoch: endEpoch})
    )
    return response;
}

export async function query_osmosis_incentives_lockableDurations(client: CosmosChainClient) {
    let response = await client.query.osmosis.incentives.v1.lockableDurations(
        osmosis.incentives.QueryLockableDurationsRequest.fromPartial({})
    )
    return response;
}


//---------------------------------------------
// OSMOSIS::INCENTIVES MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgCreateGauge
export async function execute_osmosis_incentives_create_gauge(
    isPerpetual: boolean,
    owner: string,
    distributeTo: QueryCondition,
    coins: Coin[],
    startTime: Date,
    numEpochsPaidOver: Long
) {
    let msg = osmosis.incentives.MsgCreateGauge.fromPartial({

        isPerpetual,
        owner,
        distributeTo,
        coins,
        startTime,
        numEpochsPaidOver
    });
    return msg;
}

//MsgAddToGauge
export async function execute_osmosis_incentives_add_to_gauge(
    owner: string,
    gaugeId: Long,
    rewards: Coin[],
) {
    let msg = osmosis.incentives.MsgAddToGauge.fromPartial({


        owner,
        gaugeId,
        rewards
    });
    return msg;
}
