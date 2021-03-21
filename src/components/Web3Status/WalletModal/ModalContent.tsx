import { ExternalLink } from '../../../theme'
import { AccountDetails } from '../AccountDetails/AccountDetails'
import { PendingView } from './PendingView'
import {
  UpperSection,
  CloseIcon,
  ContentWrapper,
  CloseColor,
  HeaderRow,
  HoverText,
  OptionGrid,
  Blurb,
} from './index.styles'
import { UnsupportedChainIdError } from '@web3-react/core'
import { WALLET_VIEWS } from '../../../constants'
import { Options } from './Options'
import { AbstractConnector } from '@web3-react/abstract-connector'

interface Props {
    error: any;
    toggleModal: () => void;
    account?: string | null;
    walletView: string;
    pendingTransactions: string[];
    confirmedTransactions: string[];
    ENSName?: string;
    setWalletView: (s:string) => void,
    pendingWallet?: AbstractConnector,
    setPendingError: (b:boolean) => void,
    tryActivation: (connector: AbstractConnector | undefined)=> void,
    pendingError?: boolean,
    connector?: AbstractConnector,
}

export function ModalContent({
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
  pendingError,
  connector,
}: Props) {
  if (error) {
    return (
      <UpperSection>
        <CloseIcon onClick={toggleModal}>
          <CloseColor />
        </CloseIcon>
        <HeaderRow>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'}</HeaderRow>
        <ContentWrapper>
          {error instanceof UnsupportedChainIdError ? (
            <h5>Please connect to the appropriate Ethereum network.</h5>
          ) : (
            'Error connecting. Try refreshing the page.'
          )}
        </ContentWrapper>
      </UpperSection>
    )
  }
  if (account && walletView === WALLET_VIEWS.ACCOUNT) {
    return (
      <AccountDetails
        toggleWalletModal={toggleModal}
        pendingTransactions={pendingTransactions}
        confirmedTransactions={confirmedTransactions}
        ENSName={ENSName}
        openOptions={() => setWalletView(WALLET_VIEWS.OPTIONS)}
      />
    )
  }
  return (
    <UpperSection>
      <CloseIcon onClick={toggleModal}>
        <CloseColor />
      </CloseIcon>
      {walletView !== WALLET_VIEWS.ACCOUNT ? (
        <HeaderRow color="blue">
          <HoverText
            onClick={() => {
              setPendingError(false)
              setWalletView(WALLET_VIEWS.ACCOUNT)
            }}
          >
            Back
          </HoverText>
        </HeaderRow>
      ) : (
        <HeaderRow>
          <HoverText>Connect to a wallet</HoverText>
        </HeaderRow>
      )}
      <ContentWrapper>
        {walletView === WALLET_VIEWS.PENDING ? (
          <PendingView
            connector={pendingWallet}
            error={pendingError}
            setPendingError={setPendingError}
            tryActivation={tryActivation}
          />
        ) : (
          <OptionGrid>
            <Options {...{ connector, tryActivation, setWalletView }} />
          </OptionGrid>
        )}
        {walletView !== WALLET_VIEWS.PENDING && (
          <Blurb>
            <span>New to Ethereum? &nbsp;</span>{' '}
            <ExternalLink href="https://ethereum.org/wallets/">Learn more about wallets</ExternalLink>
          </Blurb>
        )}
      </ContentWrapper>
    </UpperSection>
  )
}
