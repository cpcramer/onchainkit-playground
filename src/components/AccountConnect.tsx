import { Avatar } from '@coinbase/onchainkit/identity';
import { ConnectAccount } from '@coinbase/onchainkit/wallet'; 
import { useAccount, useDisconnect } from 'wagmi';

export default function AccountConnect() {
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();
  console.log("Address: ", address)
 
  return (
    <div className="flex flex-grow">
      {(() => {
        if (status === 'disconnected') {
          return (
          <div className="">
            <ConnectAccount />
          </div>
          )
        }
 
        return (
          <div className="flex h-8 w-8 items-center justify-center">
            {address && (
              <button type="button" className="h-16 w-16" onClick={() => disconnect()}>
                <Avatar address={address} />
              </button>
            )}
          </div>
        );
      })()}
    </div>
  );
}
