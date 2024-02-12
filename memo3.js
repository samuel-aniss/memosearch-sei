const { calculateFee, SigningStargateClient } = require("@cosmjs/stargate");
const { getOfflineSignerAmino } = require("cosmjs-utils");
const { chains } = require("chain-registry");
const fs = require("fs");
const chalk = require("chalk");
const { getQueryClient } = require("@sei-js/core");
const crypto = require("crypto");
const { sha256 } = require("@cosmjs/crypto");

// Load SEI addresses from JSON file

async function withdrawal() {
  const queryClient = await getQueryClient(
    "https://rest-testnet.sei-apis.com/"
  );
  const cosmosBaseUrl = "https://rpc.atlantic-2.seinetwork.io/";
  const address = "sei1duqh3sznrdlfyxfrqspkvmkv98u2za47tktffj";

  const txInfo = await queryClient.cosmos.tx.v1beta1.getBlockWithTxs({
    height: "65318629",
  });

  const base64String = txInfo.block.data.txs[5];

  // Step 1: Base64 decode
  const decodedData = Buffer.from(base64String, "base64");

  // Step 2: Calculate SHA-256 hash
  const hashBuffer = crypto.createHash("sha256").update(decodedData).digest();

  // Step 3: Convert hashBuffer to hexadecimal string
  const txHash = hashBuffer.toString("hex");

  console.log("Transaction Hash:", txHash);
}

withdrawal();
