import React from 'react'
import { NETWORK_LABELS } from '../../constants'
import { useActiveWeb3React } from '../../hooks'
// import { useETHBalances } from '../../state/wallet/hooks'
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

export function Header() {
  const { account, chainId } = useActiveWeb3React()

  //TODO const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const userEthBalance = {
    toSignificant: (_: any) => '0.33',
  }
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
