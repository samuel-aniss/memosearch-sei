

import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import { Any } from "../../../types/proto/google/protobuf/any";
import {Long}  from "long";
import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

// Supported query interfaces - types/proto/cosmos/feegrant/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/feegrant/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::FEEGRANT MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_cosmos_feegrant_allowance(client: CosmosChainClient,granter: string, grantee: string) {
    let response = await client.query.cosmos.feegrant.v1beta1.allowance(
        cosmos.feegrant.v1beta1.QueryAllowanceRequest.fromPartial({
            granter,
            grantee,
        }),
    );
    return response;
}

export async function query_cosmos_feegrant_allowances(client: CosmosChainClient,
                                                       grantee: string,
                                                       offset?: number,
                                                       limit?: number,) {
    let response = await client.query.cosmos.feegrant.v1beta1.allowances(
        cosmos.feegrant.v1beta1.QueryAllowancesRequest.fromPartial({
            grantee,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit })

        }),
    );
    return response;
}




//---------------------------------------------
// COSMOS::FEEGRANT MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgGrantAllowance
export async function execute_cosmos_feegrant_grant_allowance(
    granter: string,
    grantee: string,
    allowance: Any,
) {
    let msg = cosmos.feegrant.v1beta1.MsgGrantAllowance.fromPartial({
        granter,
        grantee,
        allowance,
    });
    return msg;
}

//MsgRevokeAllowance
export async function execute_cosmos_feegrant_revoke_allowance(
    granter: string,
    grantee: string,

) {
    let msg = cosmos.feegrant.v1beta1.MsgRevokeAllowance.fromPartial({
        granter,
        grantee,

    });
    return msg;
}

