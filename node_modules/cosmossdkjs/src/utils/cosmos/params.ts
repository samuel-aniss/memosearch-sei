

// Supported query interfaces - types/proto/mint/params/v1beta1/query.rpc.query.d.ts

//---------------------------------------------
// COSMOS::PARAMS MODULE - QUERY HELPERS
// --------------------------------------------

import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

export async function query_cosmos_params_params(client: CosmosChainClient) {
    let response = await client.query.cosmos.params.v1beta1.params(
        cosmos.params.v1beta1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}
