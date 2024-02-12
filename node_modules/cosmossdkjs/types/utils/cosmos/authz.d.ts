import { Any } from "cosmjs-types/google/protobuf/any.js";
import { CosmosChainClient } from "../../clients";
export declare function query_cosmos_authz_grants(client: CosmosChainClient, granter: string, grantee: string, msgTypeUrl: string, offset?: number, limit?: number): Promise<any>;
export declare function execute_cosmos_authz_grant(granter: string, grantee: string, authorization: any, expiration: Date): Promise<import("../../proto/cosmos/authz/v1beta1/tx").MsgGrant>;
export declare function execute_cosmos_authz_exec(grantee: string, msgs: Any[]): Promise<import("../../proto/cosmos/authz/v1beta1/tx").MsgExec>;
export declare function execute_cosmos_authz_revoke(granter: string, grantee: string, msgTypeUrl: string): Promise<import("../../proto/cosmos/authz/v1beta1/tx").MsgRevoke>;
