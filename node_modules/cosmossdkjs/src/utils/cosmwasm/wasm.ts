

import {Coin} from "@cosmjs/stargate";
import {CosmosChainClient} from "../../clients";
import {cosmos, cosmwasm} from "../../proto";
import {AccessConfig} from "../../../types/proto/cosmwasm/wasm/v1/types";

// Supported query interfaces - types/proto/cosmwasm/wasm/v1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/cosmwasm/wasm/v1/tx.rpc.query.d.ts

//---------------------------------------------
// COSMWASM::WASM MODULE - QUERY HELPERS
// --------------------------------------------


// ContractInfo gets the contract meta data
export async function query_wasm_contractInfo(
    client: CosmosChainClient,
    contract_addr: string
) {
    let response = await client.query.cosmwasm.wasm.v1.contractInfo(
        cosmwasm.wasm.v1.QueryContractInfoRequest.fromPartial({address: contract_addr})
    );
    return response;
}

export async function query_wasm_contractHistory(
    client: CosmosChainClient,
    contract_addr: string
) {
    let response = await client.query.cosmwasm.wasm.v1.contractHistory(
        cosmwasm.wasm.v1.QueryContractHistoryRequest.fromPartial({address: contract_addr})
    );
    return response;
}

// ContractsByCode lists all smart contracts for a code id
export async function query_wasm_contractsByCode(
    client: CosmosChainClient,
    codeId: number,
    offset?: number,
    limit?: number,
) {
    let codes = await client.query.cosmwasm.wasm.v1.contractsByCode(
        cosmwasm.wasm.v1.QueryContractsByCodeRequest.fromPartial({
            codeId: codeId,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    );
    return codes;
}


// AllContractState gets all raw store data for a single contract
export async function query_wasm_allContractState(
    client: CosmosChainClient,
    address: string,
    offset?: number,
    limit?: number,
) {
    let response = await client.query.cosmwasm.wasm.v1.allContractState(
        cosmwasm.wasm.v1.QueryAllContractStateRequest.fromPartial({
            address: address,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    );
    return response;
}

// RawContractState gets single key from the raw store data of a contract
export async function query_wasm_rawContractState(
    client: CosmosChainClient,
    address: string,
    queryData: Uint8Array
) {
    let response = await client.query.cosmwasm.wasm.v1.rawContractState(
        cosmwasm.wasm.v1.QueryRawContractStateRequest.fromPartial({address: address, queryData: queryData})
    );
    return response;
}

// SmartContractState get smart query result from the contract
export async function query_wasm_smartContractState(
    client: CosmosChainClient,
    address: string,
    queryData: Uint8Array
) {
    let response = await client.query.cosmwasm.wasm.v1.smartContractState(
        cosmwasm.wasm.v1.QuerySmartContractStateRequest.fromPartial({address: address, queryData: queryData})
    );
    return response;
}

// Code gets the binary code and metadata for a singe wasm code
export async function query_wasm_code(
    client: CosmosChainClient,
    code_id: number
) {
    let response = await client.query.cosmwasm.wasm.v1.code(
        cosmwasm.wasm.v1.QueryCodeRequest.fromPartial({codeId: code_id})
    );
    return response;
}

// Code gets the binary code and metadata for a singe wasm code
export async function query_wasm_codes(
    client: CosmosChainClient,
    offset?: number,
    limit?: number
) {
    let response = await client.query.cosmwasm.wasm.v1.codes(
        cosmwasm.wasm.v1.QueryCodesRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({
                offset: offset,
                limit: limit
            })
        })
    );
    return response;
}

// PinnedCodes gets the pinned code ids
export async function query_wasm_pinnedCodes(
    client: CosmosChainClient,
    offset?: number,
    limit?: number
) {
    let response = await client.query.cosmwasm.wasm.v1.pinnedCodes(
        cosmwasm.wasm.v1.QueryPinnedCodesRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({
                offset: offset,
                limit: limit
            })
        })
    );
    return response;
}


// Return list of codeIds with codeInfos having datahash for the contract
export async function find_code_id_from_contract_hash(
    client: CosmosChainClient,
    hash: string,
    offset?: number,
    limit?: number
) {
    let codes = await query_wasm_codes(client, offset, limit);
    let codeInfos = codes["codeInfos"];

    for (let i = 0; i < codeInfos.length; i++) {
        let hex = Buffer.from(codeInfos[i]["dataHash"]).toString("hex");
        let code_id = codeInfos[i]["codeId"];
        if (hash == hex) {
            return code_id;
        }

    }
    return 0;
}


//---------------------------------------------
// COSMWASM::WASM MODULE - TRANSACTION HELPERS
// --------------------------------------------

export async function make_storeCode_msg(
    wallet_address: string,
    wasm_bytecode: Uint8Array,
    instantiatePermission?: AccessConfig | undefined,
) {
    let store_code_msg = cosmwasm.wasm.v1.MsgStoreCode.fromPartial({
        sender: wallet_address,
        wasmByteCode: wasm_bytecode,
        instantiatePermission: instantiatePermission
    });
    return store_code_msg;
}

export async function make_instantiateContract_msg(
    wallet_address: string,
    code_id: number,
    init_msg: any,
    label: string,
    funds?: Coin[] | undefined,
    admin?: string | undefined
) {
    let instantiate_msg = cosmwasm.wasm.v1.MsgInstantiateContract.fromPartial({
        sender: wallet_address,
        admin: admin,
        codeId: code_id,
        label: label,
        msg: init_msg,
        funds: funds
    });
    return instantiate_msg;
}

export async function make_executeContract_msg(
    wallet_address: string,
    contract_address: string,
    msg: any,
    funds?: Coin[] | undefined
) {
    let execute_msg = cosmwasm.wasm.v1.MsgExecuteContract.fromPartial({
        sender: wallet_address,
        contract: contract_address,
        msg: msg,
        funds: funds
    });
    return execute_msg;
}


export async function make_migrateContract_msg(
    wallet_address: string,
    contract_address: string,
    code_id: number,
    msg: any
) {
    let migrate_msg = cosmwasm.wasm.v1.MsgMigrateContract.fromPartial({
        sender: wallet_address,
        contract: contract_address,
        codeId: code_id,
        msg: msg
    });
    return migrate_msg;
}


export async function make_updateAdmin_msg(
    wallet_address: string,
    contract_address: string,
    new_admin: string
) {
    let update_admin_msg = cosmwasm.wasm.v1.MsgUpdateAdmin.fromPartial({
        sender: wallet_address,
        contract: contract_address,
        newAdmin: new_admin
    });
    return update_admin_msg;
}

export async function make_clearAdmin_msg(
    wallet_address: string,
    contract_address: string
) {
    let clear_admin_msg = cosmwasm.wasm.v1.MsgClearAdmin.fromPartial({
        sender: wallet_address,
        contract: contract_address
    });
    return clear_admin_msg;
}
