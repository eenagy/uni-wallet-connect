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

export const ApplicationState = createContext(stateInitialValue)
export const ApplicationActions = createContext(actionsIntialValue)

export const ApplicationProvider = ({ children }: Props) => {
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
    <ApplicationState.Provider value={state}>
      <ApplicationActions.Provider value={actions}>{children}</ApplicationActions.Provider>
    </ApplicationState.Provider>
  )
}
