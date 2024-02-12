import { Coin } from "@cosmjs/stargate";
import { CosmosChainClient } from "../../clients";
export declare function query_osmosis_tokenfactory_params(client: CosmosChainClient): Promise<any>;
export declare function query_osmosis_tokenfactory_denomAuthorityMetadata(client: CosmosChainClient, denom: string): Promise<any>;
export declare function query_osmosis_tokenfactory_denomsFromCreator(client: CosmosChainClient, creator: string): Promise<any>;
export declare function execute_osmosis_tokenfactory_createDenom(sender: string, subdenom: string): Promise<import("../../proto/osmosis/tokenfactory/v1beta1/tx").MsgCreateDenom>;
export declare function execute_osmosis_tokenfactory_mint(sender: string, amount: Coin): Promise<import("../../proto/osmosis/tokenfactory/v1beta1/tx").MsgMint>;
export declare function execute_osmosis_tokenfactory_burn(sender: string, amount: Coin): Promise<import("../../proto/osmosis/tokenfactory/v1beta1/tx").MsgBurn>;
export declare function execute_osmosis_tokenfactory_changeAdmin(sender: string, denom: string, newAdmin: string): Promise<import("../../proto/osmosis/tokenfactory/v1beta1/tx").MsgChangeAdmin>;
