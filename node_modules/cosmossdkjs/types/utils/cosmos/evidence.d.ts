import { Any } from "../../../types/proto/google/protobuf/any";
import { CosmosChainClient } from "../../clients";
export declare function query_cosmos_evidence_evidence(client: CosmosChainClient, evidenceHash: Uint8Array): Promise<any>;
export declare function query_cosmos_evidence_all_evidence(client: CosmosChainClient, offset?: number, limit?: number): Promise<any>;
export declare function execute_cosmos_evidence_submit_evidence(submitter: string, evidence: Any): Promise<import("../../proto/cosmos/evidence/v1beta1/tx").MsgSubmitEvidence>;
