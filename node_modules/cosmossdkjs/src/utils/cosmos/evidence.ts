
import { Any } from "../../../types/proto/google/protobuf/any";
import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

// Supported query interfaces - types/proto/cosmos/evidence/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/evidence/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::EVIDENCE MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_cosmos_evidence_evidence(client: CosmosChainClient,evidenceHash: Uint8Array){
    let response = await client.query.cosmos.evidence.v1beta1.evidence(
        cosmos.evidence.v1beta1.QueryEvidenceRequest.fromPartial({
            evidenceHash: evidenceHash,
        }),
    );
    return response
}

export async function query_cosmos_evidence_all_evidence(client: CosmosChainClient, offset?: number, limit?: number){
    let response = await client.query.cosmos.evidence.v1beta1.allEvidence(
        cosmos.evidence.v1beta1.QueryAllEvidenceRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({ offset: offset, limit: limit }),
        }),
    );
    return response;
}



//---------------------------------------------
// COSMOS::EVIDENCE MODULE - TRANSACTION HELPERS
// --------------------------------------------

// MsgSubmitEvidence
export async function execute_cosmos_evidence_submit_evidence(
    submitter: string,
    evidence: Any,
) {
    let msg = cosmos.evidence.v1beta1.MsgSubmitEvidence.fromPartial({
        submitter,
        evidence,
    });
    return msg;
}
