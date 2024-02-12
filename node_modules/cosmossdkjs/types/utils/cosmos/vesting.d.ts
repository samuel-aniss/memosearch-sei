import { Coin } from "../../../types/proto/cosmos/base/v1beta1/coin";
export declare function execute_cosmos_vesting_create_vesting_account(fromAddress: string, toAddress: string, amount: Coin[], endTime: Number, delayed: boolean): Promise<import("../../proto/cosmos/vesting/v1beta1/tx").MsgCreateVestingAccount>;
