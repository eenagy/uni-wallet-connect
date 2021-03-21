import React, { useEffect, useState, useContext } from 'react'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import { fortmatic } from '../../../connectors'
import { OVERLAY_READY } from '../../../connectors/Fortmatic'
import { SUPPORTED_WALLETS, WALLET_VIEWS } from '../../../constants'
import usePrevious from '../../../hooks/usePrevious'
import { Web3StatusState, Web3StatusActions } from '../../../state/Web3Status.provider'

import { Modal } from '../../common/Modal'
import { Wrapper } from './index.styles'
import { ModalContent } from './ModalContent'

interface Props {
  pendingTransactions: string[] // hashes of pending
  confirmedTransactions: string[] // hashes of confirmed
  ENSName?: string
}

export function WalletModal({ pendingTransactions, confirmedTransactions, ENSName }: Props) {
  // important that these are destructed from the account-specific web3-react context
  const { active, account, connector, activate, error } = useWeb3React()

  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT)

  const [pendingWallet, setPendingWallet] = useState<AbstractConnector | undefined>()

  const [pendingError, setPendingError] = useState<boolean>()

  const { modalOpen } = useContext(Web3StatusState)
  const { toggleModal } = useContext(Web3StatusActions)

  const previousAccount = usePrevious(account)

  // close on connection, when logged out before
  useEffect(() => {
    if (account && !previousAccount && modalOpen) {
      toggleModal()
    }
  }, [account, previousAccount, toggleModal, modalOpen])

  // always reset to account view
  useEffect(() => {
    if (modalOpen) {
      setPendingError(false)
      setWalletView(WALLET_VIEWS.ACCOUNT)
    }
  }, [modalOpen])

  // close modal when a connection is successful
  const activePrevious = usePrevious(active)
  const connectorPrevious = usePrevious(connector)
  useEffect(() => {
    if (modalOpen && ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error))) {
      setWalletView(WALLET_VIEWS.ACCOUNT)
    }
  }, [setWalletView, active, error, connector, modalOpen, activePrevious, connectorPrevious])

  const tryActivation = async (connector: AbstractConnector | undefined) => {
    let name = ''
    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return (name = SUPPORTED_WALLETS[key].name)
      }
      return true
    })

    setPendingWallet(connector) // set wallet for pending view
    setWalletView(WALLET_VIEWS.PENDING)

    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined
    }

    connector &&
      activate(connector, undefined, true).catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
          activate(connector) // a little janky...can't use setError because the connector isn't set
        } else {
          setPendingError(true)
        }
      })
  }

  // close wallet modal if fortmatic modal is active
  useEffect(() => {
    fortmatic.on(OVERLAY_READY, () => {
      toggleModal()
    })
  }, [toggleModal])

  return (
    <Modal isOpen={modalOpen} onDismiss={toggleModal} minHeight={false} maxHeight={90}>
      <Wrapper>
        <ModalContent
          {...{
            error,
            toggleModal,
            account,
            walletView,
            pendingTransactions,
            confirmedTransactions,
            ENSName,
            setWalletView,
            pendingWallet,
            setPendingError,
            tryActivation,
            connector,
            pendingError,
          }}
        />
      </Wrapper>
    </Modal>
  )
}
