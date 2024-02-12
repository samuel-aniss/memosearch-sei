const fs = require("fs").promises;
const { getQueryClient } = require("@sei-js/core");

async function withdrawalForBlockHeight(queryClient, blockHeight, outputFile) {
  const txInfo = await queryClient.cosmos.tx.v1beta1.getBlockWithTxs({
    height: blockHeight.toString(),
  });

  // Write txInfo.txs to the output file
  await fs.appendFile(outputFile, JSON.stringify(txInfo) + "\n");
}

async function searchTransactionsInFile(filePath) {
  const searchConditions = {
    messageType: "/cosmos.bank.v1beta1.MsgSend",
    toAddress: "sei1duqh3sznrdlfyxfrqspkvmkv98u2za47tktffj",
  };

  try {
    const data = await fs.readFile(filePath, "utf8");
    const transactionsArray = data.split("\n").filter(Boolean).map(JSON.parse);

    const filteredTransactions = [];

    transactionsArray.forEach((transactions) => {
      const blockHeight = transactions.block.header.height;
      transactions.txs.forEach((transaction, index) => {
        const { body } = transaction;

        if (
          body &&
          body.messages &&
          body.messages.some(
            (message) =>
              message["@type"] === searchConditions.messageType &&
              message["to_address"] === searchConditions.toAddress
          )
        ) {
          console.log(blockHeight);
          filteredTransactions.push({
            transactionIndex: index + 1,
            messageIndex:
              body.messages.findIndex(
                (message) =>
                  message["@type"] === searchConditions.messageType &&
                  message["to_address"] === searchConditions.toAddress
              ) + 1,
            memo: body.memo,
            message: body.messages.find(
              (message) =>
                message["@type"] === searchConditions.messageType &&
                message["to_address"] === searchConditions.toAddress
            ),
          });
        }
      });
    });

    console.log(filteredTransactions);
  } catch (error) {
    console.error("Error reading or processing the file:", error);
  }
}

async function processBlockHeights() {
  const startBlockHeight = 65318628;
  const endBlockHeight = 65318629;
  const outputFile = "block_info.txt";

  // Clear the existing content of the output file
  await fs.writeFile(outputFile, "");

  const queryClient = await getQueryClient(
    "https://rest-testnet.sei-apis.com/"
  );

  // Create an array of promises for each block height
  const promises = [];
  for (
    let blockHeight = startBlockHeight;
    blockHeight <= endBlockHeight;
    blockHeight++
  ) {
    promises.push(
      withdrawalForBlockHeight(queryClient, blockHeight, outputFile)
    );
  }

  // Wait for all promises to resolve
  await Promise.all(promises);

  // Search through the transactions in the file
  await searchTransactionsInFile(outputFile);
}

processBlockHeights();
