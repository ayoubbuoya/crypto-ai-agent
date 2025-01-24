import { BlockchainNetworks, Blockchains } from "./enums";

const MASSA_ASSETS_MAINNET = [
  {
    symbol: "MAS",
    name: "Massa",
    decimals: 9,
    address: "",
    logo: "/assets/images/massa.png",
  },
];

const MASSA_ASSETS_BUILDNET = [
  {
    symbol: "MAS",
    name: "Massa",
    decimals: 9,
    address: "",
    logo: "/assets/images/massa.png",
  },
];

export function getNetworkAssests(
  blockchain: Blockchains,
  network: BlockchainNetworks
) {
  if (blockchain === Blockchains.MASSA) {
    if (network === BlockchainNetworks.MAINNET) {
      return MASSA_ASSETS_MAINNET;
    } else if (network === BlockchainNetworks.BUILDNET) {
      return MASSA_ASSETS_BUILDNET;
    }
  }

  return [];
}
