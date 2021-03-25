import React from 'react'
import { NETWORK_LABELS } from 'uni-wallet-connect/src/constants'
import { useActiveWeb3React, useETHBalances } from 'uni-wallet-connect/src/state-hooks'
import { Web3StatusAccount } from './components/Web3StatusAccount'
import { HeaderElement, AccountElement, NetworkCard, BalanceText } from './index.styles'

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
