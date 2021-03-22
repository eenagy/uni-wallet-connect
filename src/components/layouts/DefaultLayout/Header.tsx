import React from 'react'
import { NETWORK_LABELS } from '../../Web3Status/constants'
import { useActiveWeb3React, useETHBalances } from '../../Web3Status/state-hooks'
import { Web3Status } from '../../Web3Status'
import {
  HeaderFrame,
  HeaderControls,
  HeaderElement,
  HideSmall,
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
          <HideSmall>
            {chainId && NETWORK_LABELS[chainId] && (
              <NetworkCard title={NETWORK_LABELS[chainId]}>{NETWORK_LABELS[chainId]}</NetworkCard>
            )}
          </HideSmall>
          <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
            {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                {userEthBalance?.toSignificant(4)} ETH
              </BalanceText>
            ) : null}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  )
}
