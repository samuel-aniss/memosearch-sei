const axios = require("axios");

async function getAccountTransactions() {
  const apiUrl =
    "https://apis.mintscan.io/v1/cosmos/accounts/cosmos19hnqez0q470h9v6twqynl3jrd9t7gk2wv27ce6/transactions";

  try {
    const response = await fetch(apiUrl);
    console.log("Transactions:", response);
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
  }
}

getAccountTransactions();
