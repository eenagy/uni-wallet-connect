import { useContext } from 'react'
import { useActiveWeb3React } from '../state-hooks'
import { TransactionDetails } from '../types'
import { Web3StatusState } from '../index.provider'

// returns all the transactions for the current chain
export function useAllTransactions(): { [txHash: string]: TransactionDetails } {
  const { chainId } = useActiveWeb3React()
  const { transactions } = useContext(Web3StatusState)

  // @ts-ignore
  return chainId ? transactions[chainId] ?? {} : {}
}
