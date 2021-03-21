import React from 'react'
import { CheckCircle, Triangle } from 'react-feather'
import { useActiveWeb3React } from '../state-hooks'
import { getEtherscanLink } from '../utils'
import { useAllTransactions } from '../../../state/transactions/hooks'
import { RowFixed } from '../../common/Row'
import { Loader } from '../../common/Loader'
import { TransactionWrapper, TransactionState, TransactionStatusText, IconWrapper } from './Transactions.styles'


export function Transaction({ hash }: { hash: string }) {
  const { chainId } = useActiveWeb3React()

  if (!chainId) return null
  
  const allTransactions = useAllTransactions()
  const tx = allTransactions?.[hash]
  const summary = tx?.summary
  const pending = !tx?.receipt
  const success = !pending && tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === 'undefined')
  const href = getEtherscanLink(chainId, hash, 'transaction');

  return (
    <TransactionWrapper>
      <TransactionState href={href} pending={pending} success={success}>
        <RowFixed>
          <TransactionStatusText>{summary ?? hash} ↗</TransactionStatusText>
        </RowFixed>
        <IconWrapper pending={pending} success={success}>
          {pending ? <Loader /> : success ? <CheckCircle size="16" /> : <Triangle size="16" />}
        </IconWrapper>
      </TransactionState>
    </TransactionWrapper>
  )
}
