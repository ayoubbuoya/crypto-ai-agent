import { getNetworkAssests } from "@/lib/assets";
import { IGetBalanceParams } from "@/lib/interfaces";

export async function getBalance(params: IGetBalanceParams) {
  const { walletAddress, assetSymbol, blockchain, network } = params;

  try {
    const allAssets = getNetworkAssests(blockchain, network);

    // Find the asset by symbol
    const asset = allAssets.find((a) => a.symbol === assetSymbol);

    if (!asset) {
      return JSON.stringify({
        status: "failure",
        error: `Asset ${assetSymbol} not found`,
      });
    }

    // Return a mock balance
    return JSON.stringify({
      status: "success",
      balance: 5,
    });
  } catch (error) {
    return JSON.stringify({
      status: "failure",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
