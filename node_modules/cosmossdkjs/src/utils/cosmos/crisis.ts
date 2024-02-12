
import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";
// Supported tranasction interfaces - types/proto/cosmos/crisis/v1beta1/tx.rpc.msg.d.



//---------------------------------------------
// COSMOS::CRISIS MODULE - TRANSACTION HELPERS
// --------------------------------------------



export async function execute_cosmos_crisis_verify_invariant(
    sender: string,
    invariantModuleName: string,
    invariantRoute: string,
) {
    let msg = cosmos.crisis.v1beta1.MsgVerifyInvariant.fromPartial({
        sender: sender,
        invariantModuleName: invariantModuleName,
        invariantRoute: invariantRoute,
    });
    return msg;
}
