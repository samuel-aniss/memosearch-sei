
import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";

// Supported transaction interfaces - types/proto/cosmos/vesting/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::VESTING MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgCreateVestingAccount
export async function execute_cosmos_vesting_create_vesting_account(
    fromAddress: string,
    toAddress: string,
    amount: Coin[],
    endTime: Number,
    delayed: boolean,

) {
    let msg = cosmos.vesting.v1beta1.MsgCreateVestingAccount.fromPartial({

        fromAddress,
        toAddress,
        amount:amount,
        endTime,
        delayed,

    });
    return msg;
}
