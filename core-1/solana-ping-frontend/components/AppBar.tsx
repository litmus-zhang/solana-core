import { FC } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image alt='Logo' src="/solanaLogo.png" height={30} width={200} />
            <span>Wallet-Adapter Example</span>
            <button>Connect</button>
            <WalletMultiButton/>
        </div>
    )
}