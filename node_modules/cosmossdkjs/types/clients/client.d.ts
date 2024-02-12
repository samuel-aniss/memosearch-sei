import { HdPath } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Coin, SigningStargateClient } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
export interface Config {
    rpc: string;
    chainId: string;
    gasPrices: Coin;
    gasAdjustment: string;
}
export interface WalletOptions {
    bip39Password: string;
    hdPaths: [HdPath];
    prefix: string;
}
export declare class CosmosChainClient {
    wallet: DirectSecp256k1HdWallet;
    signer: any;
    mnemonic: string;
    config: Config;
    core: SigningStargateClient;
    wasm: SigningCosmWasmClient;
    query: any;
    private constructor();
    static init(mnemonic: string, chainConfig?: Config, wallet_options?: WalletOptions, signer?: any): Promise<CosmosChainClient>;
}
