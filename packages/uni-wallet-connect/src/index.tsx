import React from 'react'
import { NETWORK_LABELS } from './constants'
import { useActiveWeb3React, useETHBalances } from './state-hooks'
import { Web3StatusAccount } from './components/Web3StatusAccount'
import { HeaderElement, AccountElement, NetworkCard, BalanceText } from './index.styles'
// Import for for tsdx able to transform it
import './styles/global.css'
// import "@reach/dialog/styles.css";

export * from './index.manager'
export * from './index.provider'
export * from './updaters'
export * from './components/URLWarning'
export * from './components/CurrentBlockNumber'
export * from './components/Popups'
export * from './utils/getLibrary'
export * from './constants'

export function Web3Status() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  return (
    <HeaderElement>
      {chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
      <AccountElement>
        {account && userEthBalance && <BalanceText>{userEthBalance?.toSignificant(4)} ETH</BalanceText>}
        <Web3StatusAccount />
      </AccountElement>
    </HeaderElement>
  )
}
