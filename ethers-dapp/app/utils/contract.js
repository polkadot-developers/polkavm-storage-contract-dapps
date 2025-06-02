import { Contract } from 'ethers';
import { getProvider } from './ethers';
import StorageABI from '../../abis/Storage.json';

export const CONTRACT_ADDRESS = '0x58053f0e8ede1a47a1af53e43368cd04ddcaf66f';

export const CONTRACT_ABI = StorageABI;

export const getContract = () => {
  const provider = getProvider();
  return new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
};

export const getSignedContract = async (signer) => {
  return new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
};