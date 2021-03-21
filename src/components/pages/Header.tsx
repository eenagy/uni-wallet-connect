import React from 'react'
import { NETWORK_LABELS } from '../../constants'
import { useActiveWeb3React } from '../../hooks'
import { useETHBalances } from '../../hooks/useEthBalances'
import { Web3Status } from '../Web3Status/Web3Status'
import {
  HeaderFrame,
  HeaderControls,
  HeaderElement,
  HideSmall,
  AccountElement,
  NetworkCard,
  BalanceText,
} from './Header.styles'

// TODO pooling on app start

export function Header() {
  const { account, chainId } = useActiveWeb3React()

  // TODO this is not working yet, because of missing polling
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
