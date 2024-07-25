import { useCallback } from "react";
import { ConnectWallet } from "@coinbase/onchainkit/wallet";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
} from "@coinbase/onchainkit/swap";
import { useAccount, useSendTransaction } from "wagmi";
import type {
  BuildSwapTransaction,
  SwapError,
} from "@coinbase/onchainkit/swap";
import type { Token } from "@coinbase/onchainkit/token";

export default function SwapComponents() {
  const { address } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const MochiToken: Token = {
    address: "0xF6e932Ca12afa26665dC4dDE7e27be02A7c02e50",
    chainId: 8453,
    decimals: 18,
    image: "/mochi.jpg",
    name: "Mochi",
    symbol: "Mochi",
  };

  const USDCToken: Token = {
    address: "0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe",
    chainId: 8453,
    decimals: 18,
    image: "/higher.png",
    name: "Higher",
    symbol: "Higher",
  };

  const swappableTokens: Token[] = [MochiToken, USDCToken];

  const onSubmit = useCallback(
    async (swapTransaction: BuildSwapTransaction) => {
      const { transaction } = swapTransaction;
      console.log("Prepared swapTransaction:", transaction);
      try {
        const result = await sendTransaction({
          to: transaction.to,
          value: transaction.value,
          data: transaction.data,
        });
        console.log("Transaction result:", result);
      } catch (error) {
        console.error("Transaction error:", error);
      }
    },
    [sendTransaction]
  );

  return (
    <div className="">
      {address ? (
        <div className="">
          <Swap address={address}>
            <SwapAmountInput
              label="Sell"
              swappableTokens={swappableTokens}
              token={MochiToken}
              type="from"
            />
            <SwapToggleButton />
            <SwapAmountInput
              label="Buy"
              swappableTokens={swappableTokens}
              token={USDCToken}
              type="to"
            />
            <SwapButton/>
            <SwapMessage />
          </Swap>
        </div>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
}
