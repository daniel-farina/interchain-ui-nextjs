'use client';
import Image from 'next/image'
import '@interchain-ui/react/globalStyles';
import '@interchain-ui/react/styles';
import { ThemeProvider, useTheme, ConnectModalStatus, ConnectModal, ConnectModalHead, ConnectModalQRCode, ConnectModalWalletList } from '@interchain-ui/react';
import { wallets } from "cosmos-kit";
import { useState } from 'react';


export default function Home() {

// State for managing modal open/close
const [isOpen, setIsOpen] = useState(false);
const [hasBack, setHasBack] = useState(false);

// Handlers
const onClose = () => setIsOpen(false);
const onBack = () => setHasBack(false);
const onNext = () => setHasBack(true);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       
           {/* Button to open modal */}
           <button onClick={() => setIsOpen(true)}>Open Modal</button>
          {/* ConnectModal integration */}
          <ConnectModal isOpen={isOpen} onClose={onClose} header={<ConnectModalHead title="Select your wallet" hasCloseButton hasBackButton={hasBack} onBack={onBack} onClose={onClose} />}>
          <ConnectModalWalletList wallets={wallets} onWalletItemClick={onNext} />
          </ConnectModal>

    </main>
  )
}
