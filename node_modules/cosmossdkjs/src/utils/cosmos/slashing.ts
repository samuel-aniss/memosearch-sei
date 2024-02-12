


// Supported query interfaces - types/proto/cosmos/slashing/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmos/slashing/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::SLASHING MODULE - QUERY HELPERS
// --------------------------------------------

import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

export async function query_cosmos_slashing_params(client: CosmosChainClient) {
    let response = await client.query.cosmos.slashing.v1beta1.params(
        cosmos.slashing.v1beta1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}

export async function query_cosmos_slashing_signing_info(client: CosmosChainClient,consAddress: string) {
    let response = await client.query.cosmos.slashing.v1beta1.signingInfo(
        cosmos.slashing.v1beta1.QuerySigningInfoRequest.fromPartial({
            consAddress,
        }),
    );
    return response;
}

export async function query_cosmos_slashing_signing_infos(client: CosmosChainClient,
                                                          offset?: number,
                                                          limit?: number) {
    let response = await client.query.cosmos.slashing.v1beta1.signingInfos(
        cosmos.slashing.v1beta1. QuerySigningInfosRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }),
    );
    return response;
}


//---------------------------------------------
// COSMOS::SLASHING MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgUnjail
export async function execute_cosmos_slashing_unjail(
    validatorAddr: string,
) {
    let msg = cosmos.slashing.v1beta1.MsgUnjail.fromPartial({
        validatorAddr,
    });
    return msg;
}
