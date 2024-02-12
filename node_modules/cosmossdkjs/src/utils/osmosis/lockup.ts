import {Duration} from "../../../types/proto/google/protobuf/duration";
import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import {CosmosChainClient} from "../../clients";
import {osmosis} from "../../proto";


// Supported query interfaces - types/proto/osmosis/lockup/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/lockup/tx.rpc.msg.d.ts

//---------------------------------------------
// OSMOSIS::LOCKUP MODULE - QUERY HELPERS
// --------------------------------------------


export async function query_osmosis_lockup_moduleBalance(client: CosmosChainClient) {
    let response = await client.query.osmosis.lockup.v1.moduleBalance(
        osmosis.lockup.ModuleBalanceRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_lockup_moduleLockedAmount(client: CosmosChainClient) {
    let response = await client.query.osmosis.lockup.v1.moduleLockedAmount(
        osmosis.lockup.ModuleLockedAmountRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_lockup_accountUnlockableCoins(client: CosmosChainClient, owner: string) {
    let response = await client.query.osmosis.lockup.v1.accountUnlockableCoins(
        osmosis.lockup.AccountUnlockableCoinsRequest.fromPartial({
            owner
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountUnlockingCoins(client: CosmosChainClient, owner: string) {
    let response = await client.query.osmosis.lockup.v1.accountUnlockingCoins(
        osmosis.lockup.AccountUnlockingCoinsRequest.fromPartial({
            owner
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedCoins(client: CosmosChainClient, owner: string) {
    let response = await client.query.osmosis.lockup.v1.accountLockedCoins(
        osmosis.lockup.AccountLockedCoinsRequest.fromPartial({
            owner
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedPastTime(client: CosmosChainClient, owner: string, timestamp: Date) {
    let response = await client.query.osmosis.lockup.v1.accountLockedPastTime(
        osmosis.lockup.AccountLockedPastTimeRequest.fromPartial({
            owner,
            timestamp,
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedPastTimeNotUnlockingOnly(client: CosmosChainClient, owner: string, timestamp: Date) {
    let response = await client.query.osmosis.lockup.v1.accountLockedPastTimeNotUnlockingOnly(
        osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest.fromPartial({
            owner,
            timestamp,
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountUnlockedBeforeTime(client: CosmosChainClient, owner: string, timestamp: Date) {
    let response = await client.query.osmosis.lockup.v1.accountUnlockedBeforeTime(
        osmosis.lockup.AccountUnlockedBeforeTimeRequest.fromPartial({
            owner,
            timestamp,
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedPastTimeDenom(client: CosmosChainClient, owner: string, timestamp: Date, denom: string) {
    let response = await client.query.osmosis.lockup.v1.accountLockedPastTimeDenom(
        osmosis.lockup.AccountLockedPastTimeDenomRequest.fromPartial({
            owner,
            timestamp,
            denom
        })
    )
    return response;
}

export async function query_osmosis_lockup_lockedDenom(client: CosmosChainClient, denom: string,
                                                       duration: Duration) {
    let response = await client.query.osmosis.lockup.v1.lockedDenom(
        osmosis.lockup.LockedDenomRequest.fromPartial({
            denom,
            duration
        })
    )
    return response;
}

export async function query_osmosis_lockup_syntheticLockupsByLockupID(client: CosmosChainClient, lockId: Long) {
    let response = await client.query.osmosis.lockup.v1.syntheticLockupsByLockupID(
        osmosis.lockup.SyntheticLockupsByLockupIDRequest.fromPartial({
            lockId
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedLongerDuration(client: CosmosChainClient, owner: string,
                                                                       duration: Duration) {
    let response = await client.query.osmosis.lockup.v1.accountLockedLongerDuration(
        osmosis.lockup.AccountLockedLongerDurationRequest.fromPartial({
            owner,
            duration
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedDuration(client: CosmosChainClient, owner: string,
                                                                 duration: Duration) {
    let response = await client.query.osmosis.lockup.v1.accountLockedDuration(
        osmosis.lockup.AccountLockedDurationRequest.fromPartial({
            owner,
            duration
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedLongerDurationNotUnlockingOnly(client: CosmosChainClient, owner: string,
                                                                                       duration: Duration) {
    let response = await client.query.osmosis.lockup.v1.accountLockedLongerDurationNotUnlockingOnly(
        osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest.fromPartial({
            owner,
            duration
        })
    )
    return response;
}

export async function query_osmosis_lockup_accountLockedLongerDurationDenom(client: CosmosChainClient, owner: string,
                                                                            duration: Duration, denom: string) {
    let response = await client.query.osmosis.lockup.v1.accountLockedLongerDurationDenom(
        osmosis.lockup.AccountLockedLongerDurationDenomRequest.fromPartial({
            owner,
            duration,
            denom
        })
    )
    return response;
}


//---------------------------------------------
// OSMOSIS::LOCKUP MODULE - QUERY HELPERS
// --------------------------------------------

//MsgLockTokens
export async function execute_osmosis_lockup_lockTokens(
    owner: string,
    duration: Duration,
    coins: Coin[]
) {
    let msg = osmosis.lockup.MsgLockTokens.fromPartial({

        owner,
        duration,
        coins
    });
    return msg;
}

//MsgBeginUnlockingAll
export async function execute_osmosis_lockup_beginUnlockingAll(
    owner: string,
) {
    let msg = osmosis.lockup.MsgBeginUnlockingAll.fromPartial({

        owner,

    });
    return msg;
}

//MsgBeginUnlocking
export async function execute_osmosis_lockup_beginUnlocking(
    owner: string,
    ID: Long,
    coins: Coin[]
) {
    let msg = osmosis.lockup.MsgBeginUnlocking.fromPartial({

        owner,
        ID,
        coins

    });
    return msg;
}

//MsgExtendLockup
export async function execute_osmosis_lockup_extendLockup(
    owner: string,
    ID: Long,
) {
    let msg = osmosis.lockup.MsgExtendLockup.fromPartial({

        owner,
        ID,


    });
    return msg;
}




