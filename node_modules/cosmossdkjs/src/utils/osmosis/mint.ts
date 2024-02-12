import {CosmosChainClient} from "../../clients";
import {osmosis} from "../../proto";

// Supported query interfaces - types/proto/osmosis/mint/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// OSMOSIS::MINT MODULE - QUERY HELPERS
// --------------------------------------------


export async function query_osmosis_mint_params(client: CosmosChainClient) {
    let response = await client.query.osmosis.mint.v1beta1.params(
        osmosis.mint.v1beta1.QueryParamsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_mint_epochProvisions(client: CosmosChainClient) {
    let response = await client.query.osmosis.mint.v1beta1.epochProvisions(
        osmosis.mint.v1beta1.QueryEpochProvisionsRequest.fromPartial({})
    )
    return response;
}


