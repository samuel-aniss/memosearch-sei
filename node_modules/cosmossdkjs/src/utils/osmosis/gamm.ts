import {Coin} from "@cosmjs/stargate";
import {CosmosChainClient} from "../../clients";
import {cosmos, osmosis} from "../../proto";

// Supported query interfaces - types/proto/osmosis/gamm/v1beta1/query.rpc.query.d.ts
// Supported transaction interfaces - types/proto/osmosis/gamm/v1beta1/tx.rpc.query.d.ts

//---------------------------------------------
// OSMOSIS::GAMM MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_osmosis_gamm_pools(client: CosmosChainClient, offset?: number,
                                               limit?: number) {
    let response = await client.query.osmosis.gamm.v1.pools(
        osmosis.gamm.v1beta1.QueryPoolsRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit})
        })
    )
    return response;
}

export async function query_osmosis_gamm_numpools(client: CosmosChainClient) {
    let response = await client.query.osmosis.gamm.v1.numPools(
        osmosis.gamm.v1beta1.QueryNumPoolsRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_gamm_totalLiquidity(client: CosmosChainClient) {
    let response = await client.query.osmosis.gamm.v1.totalLiquidity(
        osmosis.gamm.v1beta1.QueryTotalLiquidityRequest.fromPartial({})
    )
    return response;
}

export async function query_osmosis_gamm_pool(client: CosmosChainClient, poolId: number) {
    let response = await client.query.osmosis.gamm.v1.pool(
        osmosis.gamm.v1beta1.QueryPoolRequest.fromPartial({poolId: poolId})
    )
    return response;
}

export async function query_osmosis_gamm_poolParams(client: CosmosChainClient, poolId: number) {
    let response = await client.query.osmosis.gamm.v1.poolParams(
        osmosis.gamm.v1beta1.QueryPoolParamsRequest.fromPartial({poolId: poolId})
    )
    return response;
}

export async function query_osmosis_gamm_totalPoolLiquidity(client: CosmosChainClient, poolId: number) {
    let response = await client.query.osmosis.gamm.v1.totalPoolLiquidity(
        osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest.fromPartial({poolId: poolId})
    )
    return response;
}

export async function query_osmosis_gamm_totalShares(client: CosmosChainClient, poolId: number) {
    let response = await client.query.osmosis.gamm.v1.totalShares(
        osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest.fromPartial({poolId: poolId})
    )
    return response;
}

export async function query_osmosis_gamm_spotPrice(client: CosmosChainClient, poolId: number, baseAssetDenom: string, quoteAssetDenom: string) {
    let response = await client.query.osmosis.gamm.v1.spotPrice(
        osmosis.gamm.v1beta1.QuerySpotPriceRequest.fromPartial({
            poolId: poolId,
            baseAssetDenom: baseAssetDenom,
            quoteAssetDenom: quoteAssetDenom
        })
    )
    return response;
}

//export interface SwapAmountInRoute {
//   poolId: Long;
//   tokenOutDenom: string;
// }
export async function query_osmosis_gamm_estimateSwapExactAmountIn(client: CosmosChainClient, sender: string, poolId: number, tokenIn: string, routes: any) {
    let response = await client.query.osmosis.gamm.v1.estimateSwapExactAmountIn(
        osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenIn: tokenIn,
            routes
        })
    )
    return response;
}

export async function query_osmosis_gamm_estimateSwapExactAmountOut(client: CosmosChainClient, sender: string, poolId: number, tokenOut: string, routes: any) {
    let response = await client.query.osmosis.gamm.v1.estimateSwapExactAmountOut(
        osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest.fromPartial({
            sender: sender,
            poolId: poolId,
            tokenOut: tokenOut,
            routes
        })
    )
    return response;
}

//---------------------------------------------
// OSMOSIS::GAMM MODULE - TRANSACTION HELPERS
// --------------------------------------------

export async function execute_osmosis_gamm_JoinPool(client: CosmosChainClient, sender: string,
                                                    poolId: number, shareOutAmount: string, tokenInMaxs: any) {
    let msg = osmosis.gamm.v1beta1.MsgJoinPool.fromPartial({
        sender: sender,
        poolId: poolId,
        shareOutAmount: shareOutAmount,
        tokenInMaxs: tokenInMaxs
    });
    return msg;
}

export async function execute_osmosis_gamm_ExitPool(client: CosmosChainClient, sender: string,
                                                    poolId: number, shareInAmount: string, tokenOutMins: any) {
    let msg = osmosis.gamm.v1beta1.MsgExitPool.fromPartial({
        sender: sender,
        poolId: poolId,
        shareInAmount: shareInAmount,
        tokenOutMins: tokenOutMins
    });
    return msg;
}

export async function execute_osmosis_gamm_SwapExactAmountIn(client: CosmosChainClient, sender: string, routes: any,
                                                             tokenIn: Coin, tokenOutMinAmount: string) {
    let msg = osmosis.gamm.v1beta1.MsgSwapExactAmountIn.fromPartial({
        sender: sender,
        routes: routes,
        tokenIn: tokenIn,
        tokenOutMinAmount: tokenOutMinAmount
    });
    return msg;
}

export async function execute_osmosis_gamm_SwapExactAmountOut(sender: string, routes: any,
                                                              tokenOut: Coin, tokenInMaxAmount: string) {
    let msg = osmosis.gamm.v1beta1.MsgSwapExactAmountOut.fromPartial({
        sender: sender,
        routes: routes,
        tokenOut: tokenOut,
        tokenInMaxAmount: tokenInMaxAmount
    });
    return msg;
}

export async function execute_osmosis_gamm_joinSwapExternAmountIn(client: CosmosChainClient, sender: string, poolId: number,
                                                                  tokenIn: Coin, shareOutMinAmount: string) {
    let msg = osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn.fromPartial({
        sender: sender,
        poolId: poolId,
        tokenIn: tokenIn,
        shareOutMinAmount: shareOutMinAmount
    });
    return msg;
}


export async function execute_osmosis_gamm_joinSwapShareAmountOut(client: CosmosChainClient, sender: string, poolId: number,
                                                                  tokenInDenom: string, tokenInMaxAmount: string, shareOutAmount: string) {
    let msg = osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut.fromPartial({
        sender: sender,
        poolId: poolId,
        tokenInDenom: tokenInDenom,
        shareOutAmount: shareOutAmount,
        tokenInMaxAmount: tokenInMaxAmount
    });
    return msg;
}


export async function execute_osmosis_gamm_exitSwapExternAmountOut(client: CosmosChainClient, sender: string, poolId: number,
                                                                   tokenOut: Coin, shareInMaxAmount: string) {
    let msg = osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut.fromPartial({
        sender: sender,
        poolId: poolId,
        tokenOut: tokenOut,
        shareInMaxAmount: shareInMaxAmount
    });
    return msg;
}


export async function execute_osmosis_gamm_exitSwapShareAmountIn(client: CosmosChainClient, sender: string, poolId: any,
                                                                 tokenOutDenom: string, shareInAmount: string, tokenOutMinAmount: string) {
    let msg = osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn.fromPartial({
        sender: sender,
        poolId: poolId,
        tokenOutDenom: tokenOutDenom,
        shareInAmount: shareInAmount,
        tokenOutMinAmount: tokenOutMinAmount
    });
    return msg;
}
  
  
