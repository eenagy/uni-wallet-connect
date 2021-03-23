import React from 'react'
import { NETWORK_LABELS } from '../../Web3Status/constants'
import { useActiveWeb3React, useETHBalances } from '../../Web3Status/state-hooks'
import { Web3Status } from '../../Web3Status'
import {
  HeaderFrame,
  HeaderControls,
  HeaderElement,
  AccountElement,
  NetworkCard,
  BalanceText,
} from './Header.styles'

export function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  return (
    <HeaderFrame>
      <HeaderControls>
        <HeaderElement>
          {chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
          <AccountElement>
            {account && userEthBalance && <BalanceText>{userEthBalance?.toSignificant(4)} ETH</BalanceText>}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  )
}
