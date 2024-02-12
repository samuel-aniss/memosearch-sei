


// Supported query interfaces - types/proto/ibc/applications/interchain_accounts/controller/v1/query.rpc.query.d.ts

//---------------------------------------------
// IBC::CONTROLLER MODULE - QUERY HELPERS
// --------------------------------------------




import {CosmosChainClient} from "../../../../clients";
import {ibc} from "../../../../proto";

export async function query_ibc_applications_interchain_accounts_controller_params(client: CosmosChainClient) {
    let response = await client.query.ibc.applications.interchain_accounts.controller.v1.params(
        ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}




