

// Supported query interfaces - types/proto/cosmos/upgrade/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmos/upgrade/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::UPGRADE MODULE - QUERY HELPERS
// --------------------------------------------


import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

export async function query_cosmos_upgrade_current_plan(client: CosmosChainClient) {
    let response = await client.query.cosmos.upgrage.v1beta1.currentPlan(
        cosmos.upgrade.v1beta1.QueryCurrentPlanRequest.fromPartial({}),
    );
    return response;
}

export async function query_cosmos_upgrade_applied_plan(client: CosmosChainClient,name: string) {
    let response = await client.query.cosmos.upgrage.v1beta1.appliedPlan(
        cosmos.upgrade.v1beta1.QueryAppliedPlanRequest.fromPartial({
            name,
        }),
    );
    return response;
}

export async function query_cosmos_upgrade_upgraded_consensus_state(client: CosmosChainClient) {
    let response = await client.query.cosmos.upgrage.v1beta1.upgradedConsensusState(
        cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest.fromPartial({}),
    );
    return response;
}

export async function query_cosmos_upgrade_module_versions(client: CosmosChainClient,moduleName: string) {
    let response = await client.query.cosmos.upgrage.v1beta1.moduleVersions(
        cosmos.upgrade.v1beta1.QueryModuleVersionsRequest.fromPartial({
            moduleName,
        }),
    );
    return response;
}
