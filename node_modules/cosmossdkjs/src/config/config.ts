import { stringToPath, HdPath } from "@cosmjs/crypto";
import {WalletOptions} from "../clients";
// https://github.com/cosmos/chain-registry



// -------------------------------
// THORCHAIN NETWORK :: CONFIG
//--------------------------------
export const ThorchainMainnetConfig = {
  rpc: "https://rpc.thorchain.info",
  chainId: "thorchain-mainnet-v1",
  gasPrices: { urune: 0.01 },
  gasAdjustment: "1.5",
};
// wallet options
export const ThorchainWalletOptions : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/931'/0'/0/0")],
  prefix: "thor",
};

// -------------------------------
// INJECTIVE NETWORK :: CONFIG
//--------------------------------
export const InjectiveMainnetConfig = {
  rpc: "https://injective-rpc.quickapi.com:443",
  chainId: "injective-1",
  gasPrices: { inj:  0.0007 },
  gasAdjustment: "1.5",
};
// wallet options
export const InjectiveWalletOptions : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/60'/0'/0/0")],
  prefix: "inj",
};

// -------------------------------
// AKASH NETWORK :: CONFIG
//--------------------------------
export const AkashMainnetConfig = {
  rpc: "https://api.akash.forbole.com:443",
  chainId: "akashnet-2",
  gasPrices: { uatom: 0.01 },
  gasAdjustment: "1.5",
};
// wallet options
export const AkashWalletOptions  : WalletOptions= {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
  prefix: "uakt",
};

// -------------------------------
// COSMOS HUB NETWORK :: CONFIG
//--------------------------------
export const CosmosMainnetConfig = {
  // rpc: "https://rest-juno.whispernode.com",
  rpc: "https://rpc-cosmoshub.blockapsis.com",
  chainId: "cosmoshub-4",
  gasPrices: { uatom: 0.01 },
  gasAdjustment: "1.5",
};
// wallet options
export const CosmosWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
  prefix: "cosmos",
};

// -------------------------------
// SECRET NETWORK :: CONFIG
//--------------------------------
export const SecretMainnetConfig = {
  // rpc: "https://rest-juno.whispernode.com",
  rpc: "https://rpc.scrt.network",
  chainId: "secret-4",
  gasPrices: { uscrt: 0.1 },
  gasAdjustment: "1.5",
};
// wallet options
export const SecretWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/529'/0'/0/0")],
  prefix: "secret",
};

// -------------------------------
// FETCH NETWORK :: CONFIG
//--------------------------------
export const FetchMainnetConfig = {
  // rpc: "https://rest-juno.whispernode.com",
  rpc: "https://rpc-fetchhub.fetch.ai:443",
  chainId: "fetchhub-4",
  gasPrices: { afet: 0.025 },
  gasAdjustment: "1.5",
};
// wallet options
export const FetchWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
  prefix: "fetch",
};


// -------------------------------
// JUNO NETWORK :: CONFIG
//--------------------------------
export const JunoMainnetConfig = {
  // rpc: "https://rest-juno.whispernode.com",
  rpc: "https://rpc-juno.whispernode.com",
  chainId: "juno-1",
  gasPrices: { ujuno: 0.04 },
  gasAdjustment: "1.5",
};
// wallet options
export const JunoWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
  prefix: "juno",
};


// -------------------------------
// EVMOS NETWORK :: CONFIG
//--------------------------------
export const EvmosMainnetConfig = {
  // rpc: "https://rest-evmos.ecostake.com",
  rpc: "https://rpc-evmos.ecostake.com",
  chainId: "evmos_9001-2",
  gasPrices: { aevmos: 0.15 },
  gasAdjustment: "1.5",
};
// wallet options
export const EvmosWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/60'/0'/0/0")],
  prefix: "evmos",
};



// -------------------------------
// KUJIRA NETWORK :: CONFIG
//--------------------------------
export const KujiraMainnetConfig = {
  // rpc: "https://rest.kujira.ccvalidators.com:443",
  rpc: "https://lcd-kujira.whispernode.com",
  chainId: "kaiyo-1",
  gasPrices: { ukuji: 0.15 },
  gasAdjustment: "1.5",
};
// export const KujiraTestnetConfig = {
//   // rpc: "https://lcd-test.osmosis.zone/",
//   rpc: "https://rpc-test.osmosis.zone/",
//   chainId: "osmo-test-4",
//   gasPrices: { uluna: 0.15 },
//   gasAdjustment: "1.5",
// };
// wallet options
export const KujiraWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
  prefix: "kujira",
};


// -------------------------------
// OSMOSIS NETWORK :: CONFIG
//--------------------------------
export const OsmosisMainnetConfig = {
  // rpc: "https://lcd.osmosis.zone/",
  rpc: "https://rpc.osmosis.zone/",
  chainId: "osmosis-1",
  gasPrices: {
    denom: "uosmo",
    amount: "2000000",
  },
  gasAdjustment: "1.5",
};
export const OsmosisTestnetConfig = {
  // rpc: "https://lcd-test.osmosis.zone/",
  rpc: "https://rpc-test.osmosis.zone/",
  chainId: "osmo-test-4",
  gasPrices: {
    denom: "uosmo",
    amount: "2000000",
  },
  gasAdjustment: "1.5",
};
export const OsmosisLocalConfig = {
//   const DEFAULT_OSMOSIS_RPC = 'http://localhost:26657';
// const DEFAULT_OSMOSIS_LCD = 'http://localhost:1337';
  rpc: "http://localhost:26657",
  chainId: "osmosisd",
  gasPrices: {
    denom: "uosmo",
    amount: "2000000",
  },
  gasAdjustment: "1.5",
};
// wallet options
export const OsmosisWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
  prefix: "osmo",
};



// -------------------------------
// TERRA-2 NETWORK :: CONFIG
//--------------------------------
export const Terra2MainnetConfig = {
  rpc: "https://lcd.terra.dev",
  chainId: "phoenix-1",
  gasPrices: { uluna: 0.15 },
  gasAdjustment: "1.5",
};
export const Terra2TestnetConfig = {
  rpc: "https://lcd.terra.dev",
  chainId: "pisco-1",
  gasPrices: { uluna: 0.15 },
  gasAdjustment: "1.5",
};
// wallet options
export const Terra2WalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/330'/0'/0/0")],
  prefix: "terra",
};


// -------------------------------
// TERRA CLASSIC NETWORK :: CONFIG
//--------------------------------
// const { data: gasPrices } = await Axios.get(
//   'https://fcd.terra.dev/v1/txs/gas_prices'
// );
// config
export const TerraClassicMainnetConfig = {
  rpc: "https://lcd.terra.dev",
  chainId: "columbus-5",
  gasPrices: { uluna: 0.15 },
  gasAdjustment: "1.5",
};
export const TerraClassicTestConfig = {
  rpc: "https://bombay-lcd.terra.dev",
  chainId: "bombay-12",
  gasPrices: { uluna: 0.15 },
  gasAdjustment: "1.5",
};
export const TerraClassicLocalConfig = {
  rpc: "http://localhost:1317",
  chainId: "localterra",
  gasPrices: { uluna: 0.15 },
  gasAdjustment: "1.5",
};
// wallet options
export const TerraClassicWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/330'/0'/0/0")],
  prefix: "terra",
};


// -------------------------------
// PERSISTENCE NETWORK :: CONFIG
//--------------------------------
// config
export const PersistenceMainnetConfig = {
  rpc: "https://rpc.persistence.one:443",
  chainId: "core-1",
  gasPrices: {
    denom: "uxprt",
    amount: "2000000",
  },
  gasAdjustment: "1.5",
};
export const PersistenceTestConfig = {
  rpc: "https://rpc.testnet.persistence.one:443",
  chainId: "test-core-1",
  gasPrices: {
    denom: "uxprt",
    amount: "2000000",
  },
  gasAdjustment: "1.5",
};
export const PersistenceLocalConfig = {
  rpc: "http://localhost:26657",
  chainId: "testing",
  gasPrices: {
    denom: "uxprt",
    amount: "2000000",
  },
  gasAdjustment: "1.5",
};
// wallet options
export const PersistenceWalletOptions  : WalletOptions = {
  bip39Password: "",
  hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
  prefix: "persistence",
};
