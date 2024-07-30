import {
  Transaction, // remove ]
  TransactionButton,
  TransactionStatus,
  TransactionStatusLabel,
  TransactionStatusAction,
} from "@coinbase/onchainkit/transaction";
import { useAccount } from "wagmi";
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { ContractFunctionParameters } from 'viem'; // Add this import

const mySepoliaNFTABI = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "to", type: "address" }],
    name: "safeMint",
    outputs: [],
  },
] as const;

const mySepoliaNFTAddress = "0x119Ea671030FBf79AB93b436D2E20af6ea469a19"; 

export default function TransactionComponents() {
    const { address } = useAccount();
   
    const contracts: ContractFunctionParameters[] = [ // add type annotation
      {
        address: mySepoliaNFTAddress,
        abi: mySepoliaNFTABI,
        functionName: 'safeMint',
        args: [address],
      }
    ];
   let url = process.env.PAYMASTER_PROD_URL
  if (url === undefined) { 
    throw new Error('PAYMASTER_PROD_URL is not defined');
  }
    return address ? (
      <Transaction address={address} contracts={contracts}
      capabilities={{ 
        paymasterService: { 
          url: url, 
        }, 
      }}>
        <TransactionButton />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>  
    ) : (
      <Wallet>
        <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
      </Wallet>
    );
  }