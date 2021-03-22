import { Contract } from '@ethersproject/contracts'
import {
  getContract,
  ListenerOptions,
  Call,
  parseCallKey,
  toCallKey,
  toCallState,
  CallResult,
  INVALID_RESULT,
  OptionalMethodInputs, 
  CallState
} from '../utils'
import { useContext, useMemo, useEffect } from 'react'
import { MULTICALL_NETWORKS, MULTICALL_ABI } from '../constants/multicall'

// Instead of redux just use a Web3Status which groups together the required state for wallet connect related features
import { Web3StatusState, Web3StatusActions } from '../Web3Status.provider'
import { useActiveWeb3React } from './useActiveWeb3React'

// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useMulticallContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false)
}

// the lowest level call for subscribing to contract data
function useCallsData(calls: (Call | undefined)[], options?: ListenerOptions): CallResult[] {
  const { chainId } = useActiveWeb3React()
  const {
    multicall: { callResults },
  } = useContext(Web3StatusState)
  const { addMulticallListeners, removeMulticallListeners } = useContext(Web3StatusActions)
  const serializedCallKeys: string = useMemo(
    () =>
      JSON.stringify(
        calls
          ?.filter((c): c is Call => Boolean(c))
          ?.map(toCallKey)
          ?.sort() ?? []
      ),
    [calls]
  )
  // update listeners when there is an actual change that persists for at least 100ms
  useEffect(() => {
    const callKeys: string[] = JSON.parse(serializedCallKeys)
    if (!chainId || callKeys.length === 0) return undefined
    const calls = callKeys.map((key) => parseCallKey(key))
    addMulticallListeners({
      chainId,
      calls,
      options,
    })

    return () => {
      removeMulticallListeners({
        chainId,
        calls,
        options,
      })
    }
  }, [chainId, options, serializedCallKeys])
  return useMemo(
    () =>
      calls.map<CallResult>((call) => {
        if (!chainId || !call) return INVALID_RESULT

        const result = callResults[chainId]?.[toCallKey(call)]
        let data
        if (result?.data && result?.data !== '0x') {
          data = result.data
        }

        return { valid: true, data, blockNumber: result?.blockNumber }
      }),
    [callResults, calls, chainId]
  )
}
export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React()
  const {
    application: { blockNumber },
  } = useContext(Web3StatusState)
  return blockNumber[chainId ?? -1]
}

// Call a contract on different chains, but same function
// with different inputs
// returns the state of each calls with relavant data/error
export function useSingleContractMultipleData(
  contract: Contract | null | undefined,
  methodName: string,
  callInputs: OptionalMethodInputs[],
  options?: ListenerOptions
): CallState[] {
  const fragment = useMemo(() => contract?.interface?.getFunction(methodName), [contract, methodName])

  const calls = useMemo(
    () =>
      contract && fragment && callInputs && callInputs.length > 0
        ? callInputs.map<Call>((inputs) => {
            return {
              address: contract.address,
              callData: contract.interface.encodeFunctionData(fragment, inputs),
            }
          })
        : [],
    [callInputs, contract, fragment]
  )

  const results = useCallsData(calls, options)

  const latestBlockNumber = useBlockNumber()

  return useMemo(() => {
    return results.map((result) => toCallState(result, contract?.interface, fragment, latestBlockNumber))
  }, [fragment, contract, results, latestBlockNumber])
}
