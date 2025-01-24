import { BlockchainNetworks, Blockchains } from "../enums";

export interface IGetBalanceParams {
  walletAddress: string;
  assetSymbol: string;
  blockchain: Blockchains;
  network: BlockchainNetworks;
}
