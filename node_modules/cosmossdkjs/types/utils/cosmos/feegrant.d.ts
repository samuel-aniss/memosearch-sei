import { Any } from "../../../types/proto/google/protobuf/any";
import { CosmosChainClient } from "../../clients";
export declare function query_cosmos_feegrant_allowance(client: CosmosChainClient, granter: string, grantee: string): Promise<any>;
export declare function query_cosmos_feegrant_allowances(client: CosmosChainClient, grantee: string, offset?: number, limit?: number): Promise<any>;
export declare function execute_cosmos_feegrant_grant_allowance(granter: string, grantee: string, allowance: Any): Promise<import("../../proto/cosmos/feegrant/v1beta1/tx").MsgGrantAllowance>;
export declare function execute_cosmos_feegrant_revoke_allowance(granter: string, grantee: string): Promise<import("../../proto/cosmos/feegrant/v1beta1/tx").MsgRevokeAllowance>;
