import React, { createContext, useMemo, ReactNode, useReducer } from 'react'

interface Props {
  children: ReactNode
}
interface ApplicationState {
  modalOpen: boolean
  error: string
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
  modalOpen: false,
  error: '',
}
const actionsIntialValue = {
  toggleModal: () => {},
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
            modalOpen: !state.modalOpen,
          }
        }
        default:
          return state
      }
    },
    {
      modalOpen: false,
      error: '',
    }
  )

  // Actions to components
  const actions = useMemo(() => {
    return {
      toggleModal: () => {
        dispatch({ type: 'TOGGLE_MODAL' })
      },
    }
  }, [])

  return (
    <Web3StatusState.Provider value={state}>
      <Web3StatusActions.Provider value={actions}>{children}</Web3StatusActions.Provider>
    </Web3StatusState.Provider>
  )
}
