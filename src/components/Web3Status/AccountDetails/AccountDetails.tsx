import React, { useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { ExternalLink as LinkIcon } from 'react-feather'

import { useActiveWeb3React } from '../hooks/connect'
import { clearAllTransactions } from '../../../state/transactions/hooks'
import { shortenAddress, getEtherscanLink } from '../../../utils'
import { injected, walletlink } from '../connectors'
import { SUPPORTED_WALLETS } from '../constants'

import { AutoRow } from '../../common/Row'
import { StatusIcon, WalletAction } from '../StatusIcon'
import { Copy } from './Copy'
import { Transaction } from './Transaction'
import { TYPE } from '../../../theme'

import {
  TransactionListWrapper,
  WalletName,
  UpperSection,
  CloseIcon,
  HeaderRow,
  YourAccount,
  AccountSection,
  CloseColor,
  InfoCard,
  AccountGroupingRow,
  AccountControl,
  AddressLink,
  LowerSection,
} from './AccountDetails.styles'
import { LinkStyledButton } from '../../../theme'

function formatConnectorName(connector: AbstractConnector | undefined) {
  // @ts-ignore
  const { ethereum } = window
  const isMetaMask = !!(ethereum && ethereum.isMetaMask)
  const name = Object.keys(SUPPORTED_WALLETS)
    .filter(
      (k) =>
        SUPPORTED_WALLETS[k].connector === connector && (connector !== injected || isMetaMask === (k === 'METAMASK'))
    )
    .map((k) => SUPPORTED_WALLETS[k].name)[0]
  return <WalletName>Connected with {name}</WalletName>
}

interface AccountDetailsProps {
  toggleWalletModal: () => void
  pendingTransactions: string[]
  confirmedTransactions: string[]
  ENSName?: string
  openOptions: () => void
}

export function AccountDetails({
  toggleWalletModal,
  pendingTransactions,
  confirmedTransactions,
  ENSName,
  openOptions,
}: AccountDetailsProps) {
  const { chainId, account, connector } = useActiveWeb3React()
  const theme = useContext(ThemeContext)

  const clearAllTransactionsCallback = useCallback(() => {
    //@ts-ignore
    if (chainId) clearAllTransactions({ chainId })
  }, [chainId])

  return (
    <>
      <UpperSection>
        <CloseIcon onClick={toggleWalletModal}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>Account</HeaderRow>
        <AccountSection>
          <YourAccount>
            <InfoCard>
              <AccountGroupingRow>
                {formatConnectorName(connector)}
                <div>
                  {connector !== injected && connector !== walletlink && (
                    <WalletAction
                      style={{ fontSize: '.825rem', fontWeight: 400, marginRight: '8px' }}
                      onClick={() => {
                        ;(connector as any).close()
                      }}
                    >
                      Disconnect
                    </WalletAction>
                  )}
                  <WalletAction
                    style={{ fontSize: '.825rem', fontWeight: 400 }}
                    onClick={() => {
                      openOptions()
                    }}
                  >
                    Change
                  </WalletAction>
                </div>
              </AccountGroupingRow>
              <AccountGroupingRow id="web3-account-identifier-row">
                <AccountControl>
                  {ENSName ? (
                    <>
                      <div>
                        <StatusIcon connector={connector} end/>
                        <p> {ENSName}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                      <StatusIcon connector={connector} end/>
                        <p> {account && shortenAddress(account)}</p>
                      </div>
                    </>
                  )}
                </AccountControl>
              </AccountGroupingRow>
              <AccountGroupingRow>
                {ENSName ? (
                  <>
                    <AccountControl>
                      <div>
                        {account && (
                          <Copy toCopy={account}>
                            <span style={{ marginLeft: '4px' }}>Copy Address</span>
                          </Copy>
                        )}
                        {chainId && account && (
                          <AddressLink
                            hasENS={!!ENSName}
                            isENS={true}
                            href={chainId && getEtherscanLink(chainId, ENSName, 'address')}
                          >
                            <LinkIcon size={16} />
                            <span style={{ marginLeft: '4px' }}>View on Etherscan</span>
                          </AddressLink>
                        )}
                      </div>
                    </AccountControl>
                  </>
                ) : (
                  <>
                    <AccountControl>
                      <div>
                        {account && (
                          <Copy toCopy={account}>
                            <span style={{ marginLeft: '4px' }}>Copy Address</span>
                          </Copy>
                        )}
                        {chainId && account && (
                          <AddressLink
                            hasENS={!!ENSName}
                            isENS={false}
                            href={getEtherscanLink(chainId, account, 'address')}
                          >
                            <LinkIcon size={16} />
                            <span style={{ marginLeft: '4px' }}>View on Etherscan</span>
                          </AddressLink>
                        )}
                      </div>
                    </AccountControl>
                  </>
                )}
              </AccountGroupingRow>
            </InfoCard>
          </YourAccount>
        </AccountSection>
      </UpperSection>
      {!!pendingTransactions.length || !!confirmedTransactions.length ? (
        <LowerSection>
          <AutoRow mb={'1rem'} style={{ justifyContent: 'space-between' }}>
            <TYPE.body>Recent Transactions</TYPE.body>
            <LinkStyledButton onClick={clearAllTransactionsCallback}>(clear all)</LinkStyledButton>
          </AutoRow>
          <TransactionListWrapper>
            {pendingTransactions.map((hash, i) => {
              return <Transaction key={i} hash={hash} />
            })}
          </TransactionListWrapper>
          <TransactionListWrapper>
            {confirmedTransactions.map((hash, i) => {
              return <Transaction key={i} hash={hash} />
            })}
          </TransactionListWrapper>
        </LowerSection>
      ) : (
        <LowerSection>
          <TYPE.body color={theme.text1}>Your transactions will appear here...</TYPE.body>
        </LowerSection>
      )}
    </>
  )
}
