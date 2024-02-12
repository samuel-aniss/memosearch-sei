const fs = require("fs").promises;
const { getQueryClient } = require("@sei-js/core");
const crypto = require("crypto");
const chalk = require("chalk");

const filePath = "filtered_block_info.txt";

async function searchByMemoAndToAddress(memo, toAddress) {
  try {
    const data = await fs.readFile(filePath, "utf8");

    const jsonData = data.split("\n").filter(Boolean).map(JSON.parse);

    const results = [];

    for (const entryArray of jsonData) {
      const entry = entryArray[0];
      if (entry.Body.memo === memo) {
        for (const [index, msg] of entry.Body.messages.entries()) {
          if (msg.to_address === toAddress) {
            results.push({
              Hash: entry.Hash,
              TxIndex: entry.Index,
            });
            break;
          }
        }
      }
    }

    return results;
  } catch (error) {
    console.error("Error reading file:", error);
    return [];
  }
}

// Example usage:
const memoToSearch = "11";
const toAddressToSearch = "sei1duqh3sznrdlfyxfrqspkvmkv98u2za47tktffj";
searchByMemoAndToAddress(memoToSearch, toAddressToSearch)
  .then(async (searchResults) => {
    console.log(`Memo "${memoToSearch}" found for ${toAddressToSearch}`);

    // Process each search result and fetch the transaction hash
    const txHashPromises = searchResults.map(async (result) => {
      const txHash = await withdrawal(result.Hash, result.TxIndex);
      return {
        ...result,
        TxHash: txHash,
      };
    });

    // Wait for all promises to resolve
    const resultsWithTxHash = await Promise.all(txHashPromises);

    // Log results to a text file
    const logFilePath = "search_results.txt";
    const logData = resultsWithTxHash
      .map(
        (result) =>
          `Memo "${memoToSearch}" found for ${toAddressToSearch} in hash: https://www.seiscan.app/atlantic-2/txs/${result.TxHash}`
      )
      .join("\n");

    await fs.writeFile(logFilePath, logData);

    // Log the content to the console
    console.log(
      "Results logged to search_results.txt:\n",
      chalk.green(logData)
    );
  })
  .catch((error) => {
    console.error("Error searching:", error);
  });

async function withdrawal(hash, txIndex) {
  const queryClient = await getQueryClient(
    "https://rest-testnet.sei-apis.com/"
  );

  const txInfo = await queryClient.cosmos.tx.v1beta1.getBlockWithTxs({
    height: hash,
  });

  const base64String = txInfo.block.data.txs[txIndex];

  // Step 1: Base64 decode
  const decodedData = Buffer.from(base64String, "base64");

  // Step 2: Calculate SHA-256 hash
  const hashBuffer = crypto.createHash("sha256").update(decodedData).digest();

  // Step 3: Convert hashBuffer to hexadecimal string
  const TxHash = hashBuffer.toString("hex");

  return TxHash;
}
