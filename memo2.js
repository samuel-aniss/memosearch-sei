const { getQueryClient } = require("@sei-js/core");
const util = require("util");
const fs = require("fs");

async function withdrawal(hash) {
  const queryClient = await getQueryClient(
    "https://rest-testnet.sei-apis.com/"
  );

  try {
    const txInfo = await queryClient.cosmos.tx.v1beta1.getBlockWithTxs({
      height: hash,
    });
    const filteredTransactions = [];

    txInfo.txs.forEach((transaction, index) => {
      const { body } = transaction;
      const Hash = hash;

      if (
        body &&
        body.messages &&
        body.messages.some(
          (message) => message["@type"] === "/cosmos.bank.v1beta1.MsgSend"
        )
      ) {
        filteredTransactions.push({
          Index: index, // Add the index to the filtered transactions
          Hash: Hash,
          Body: body,
        });
      }
    });

    return filteredTransactions; // Return the filtered transactions
  } catch (error) {
    console.error(`Error fetching data for block height ${hash}:`, error);
    throw error; // Re-throw the error to be caught by the calling function
  }
}

async function processBlockHeights() {
  const startBlockHeight = 65318500;
  const endBlockHeight = 65318629;
  const outputFile = "filtered_block_info.txt";
  const blocksPerStream = 50;
  const maxRetries = 3;

  try {
    for (
      let start = startBlockHeight;
      start <= endBlockHeight;
      start += blocksPerStream
    ) {
      const end = Math.min(start + blocksPerStream - 1, endBlockHeight);

      // Create an array to store promises for each block in the current stream
      const promises = [];

      // Iterate through block heights and create promises for each block in the current stream
      for (let blockHeight = start; blockHeight <= end; blockHeight++) {
        promises.push(processBlock(blockHeight, maxRetries, outputFile));
      }

      // Wait for all promises to resolve before moving to the next stream
      await Promise.all(promises);

      console.log(
        `Filtered block data for heights ${start} to ${end} processed successfully`
      );
    }

    console.log("All filtered block data processed successfully");
  } catch (error) {
    console.error("Error in processing and writing to the file:", error);
  }
}

async function processBlock(blockHeight, maxRetries, outputFile) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      // Call the withdrawal function to get filtered block data
      const filteredBlockData = await withdrawal(blockHeight);

      // Check if filteredBlockData is not empty before writing to the file
      if (filteredBlockData.length > 0) {
        // Append the filtered block data to the file
        await fs.promises.appendFile(
          outputFile,
          JSON.stringify(filteredBlockData) + "\n"
        );
      }

      // Break the retry loop if successful
      break;
    } catch (error) {
      console.error(`Error processing block height ${blockHeight}:`, error);

      // Increment the retry counter
      retries++;

      // If maxRetries reached, log the failure and move to the next block
      if (retries === maxRetries) {
        console.error(
          `Max retries reached for block height ${blockHeight}. Moving to the next block.`
        );
      }
    }
  }
}

processBlockHeights();
