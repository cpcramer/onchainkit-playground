'use client';
import { ReactNode } from 'react';
import { base } from 'viem/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
 
type Props = { children: ReactNode };
 
function OnchainProviders({ children }: Props) {
  return (
    <OnchainKitProvider apiKey="YOUR_PUBLIC_API_KEY" chain={base}>
      <YourKit />
    </OnchainKitProvider>
  );
};
 
export default OnchainProviders;