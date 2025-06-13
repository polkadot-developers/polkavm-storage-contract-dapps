import { JsonRpcProvider } from 'ethers';

export const PASSET_HUB_CONFIG = {
  name: 'Passet Hub',
  rpc: 'https://testnet-passet-hub-eth-rpc.polkadot.io/', // Passet Hub testnet RPC
  chainId: 420420422, // Passet Hub testnet chainId
  blockExplorer: 'https://blockscout-passet-hub.parity-testnet.parity.io/',
};

export const getProvider = () => {
  return new JsonRpcProvider(PASSET_HUB_CONFIG.rpc, {
    chainId: PASSET_HUB_CONFIG.chainId,
    name: PASSET_HUB_CONFIG.name,
  });
};

// Helper to get a signer from a provider
export const getSigner = async (provider) => {
  if (window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const ethersProvider = new ethers.BrowserProvider(window.ethereum);
    return ethersProvider.getSigner();
  }
  throw new Error('No Ethereum browser provider detected');
};