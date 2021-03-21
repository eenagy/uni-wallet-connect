import { ChainId } from '@uniswap/sdk'
import React, { createContext, useMemo, ReactNode, useReducer } from 'react'

interface Props {
  children: ReactNode
}
interface ApplicationState {
  application: {
    modalOpen: boolean
    blockNumber: { readonly [chainId: number]: number }
  }
  multicall: {
    callResults: {
      [chainId: number]: {
        [callKey: string]: {
          data?: string | null
          blockNumber?: number
          fetchingBlockNumber?: number
        }
      }
    }
  }
}
type ApplicationAction =
  | {
      type: 'TOGGLE_MODAL'
    }
  | {
      type: 'NETWORK_ERROR'
      payload: {
        error: string | Error
      }
    }
const stateInitialValue: ApplicationState = {
  application: {
    modalOpen: false,
    blockNumber: {}
  },
  multicall: { callResults: {} },
}
interface ListenerProps {chainId: ChainId | undefined, calls : any, options: any}
const actionsIntialValue = {
  toggleModal: () => {},
  addMulticallListeners: (_: ListenerProps) => {},
  removeMulticallListeners: (_:ListenerProps) => {},
}

export const Web3StatusState = createContext(stateInitialValue)
export const Web3StatusActions = createContext(actionsIntialValue)

export const Web3StatusProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    (state: ApplicationState, action: ApplicationAction) => {
      switch (action.type) {
        case 'TOGGLE_MODAL': {
          return {
            ...state,
            application: {
              ...state.application,
              modalOpen: !state.application.modalOpen,
            },
          }
        }
        default:
          return state
      }
    },
    {...stateInitialValue}
  )

  // Actions to components
  const actions = useMemo(() => {
    return {
      toggleModal: () => {
        dispatch({ type: 'TOGGLE_MODAL' })
      },
      // TODO
      addMulticallListeners: () => {},
      removeMulticallListeners: () => {}
    }
  }, [])

  return (
    <Web3StatusState.Provider value={state}>
      <Web3StatusActions.Provider value={actions}>{children}</Web3StatusActions.Provider>
    </Web3StatusState.Provider>
  )
}
