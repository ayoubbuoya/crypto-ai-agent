import { z } from "zod";

// Schema definitions
export const getBalanceSchema = z.object({
  walletAddress: z
    .string()
    .describe("The wallet address to get the balance of"),
  assetSymbol: z
    .string()
    .describe("The asset symbol to get the balance of. eg. USDC, ETH"),
  blockchain: z.string().describe("The blockchain to get the balance of"),
  network: z.string().describe("The blockchain network to get the balance of"),
});

export const transferSchema = z.object({
  to: z.string().describe("The wallet address to transfer to"),
  amount: z.string().describe("The amount to transfer"),
  symbol: z.string().describe("The asset symbol to transfer. eg. USDC, ETH"),
  blockchain: z.string().describe("The blockchain to transfer on"),
  network: z.string().describe("The blockchain network to transfer on"),
});
