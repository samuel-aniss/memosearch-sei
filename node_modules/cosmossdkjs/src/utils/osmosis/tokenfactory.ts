import {Coin} from "@cosmjs/stargate";
import {CosmosChainClient} from "../../clients";
import {osmosis} from "../../proto";

// Supported query interfaces - types/proto/osmosis/tokenfactory/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/tokenfactory/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// OSMOSIS::TOKENFACTORY MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_osmosis_tokenfactory_params(client: CosmosChainClient) {
    let response = await client.query.osmosis.tokenfactory.params(
        osmosis.tokenfactory.v1beta1.QueryParamsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_tokenfactory_denomAuthorityMetadata(client: CosmosChainClient, denom: string) {
    let response = await client.query.osmosis.tokenfactory.denomAuthorityMetadata(
        osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest.fromPartial({
            denom,
        })
    )
    return response;
}

export async function query_osmosis_tokenfactory_denomsFromCreator(client: CosmosChainClient, creator: string) {
    let response = await client.query.osmosis.tokenfactory.denomsFromCreator(
        osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest.fromPartial({
            creator,
        })
    )
    return response;
}


//---------------------------------------------
// OSMOSIS::TOKENFACTORY MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgCreateDenom
export async function execute_osmosis_tokenfactory_createDenom(
    sender: string,
    subdenom: string,
) {
    let msg = osmosis.tokenfactory.v1beta1.MsgCreateDenom.fromPartial({

        sender,
        subdenom,
    });
    return msg;
}

//MsgMint
export async function execute_osmosis_tokenfactory_mint(
    sender: string,
    amount: Coin
) {
    let msg = osmosis.tokenfactory.v1beta1.MsgMint.fromPartial({

        sender,
        amount,
    });
    return msg;
}

//MsgBurn
export async function execute_osmosis_tokenfactory_burn(
    sender: string,
    amount: Coin
) {
    let msg = osmosis.tokenfactory.v1beta1.MsgBurn.fromPartial({

        sender,
        amount,
    });
    return msg;
}

//MsgChangeAdmin
export async function execute_osmosis_tokenfactory_changeAdmin(
    sender: string,
    denom: string,
    newAdmin: string,
) {
    let msg = osmosis.tokenfactory.v1beta1.MsgChangeAdmin.fromPartial({

        sender,
        denom,
        newAdmin
    });
    return msg;
}


