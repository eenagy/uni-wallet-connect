import { Option } from './Option'
import { isMobile } from 'react-device-detect'
import { injected, portis } from '../../connectors'
import { SUPPORTED_WALLETS, WALLET_VIEWS } from '../../constants'
import { AbstractConnector } from '@web3-react/abstract-connector'

interface Props{
    connector?: AbstractConnector;
    tryActivation: (connector: AbstractConnector | undefined) => void;
    setWalletView: (s:string) => void
}

// get wallets user can switch too, depending on device/browser
export function Options({ connector, tryActivation, setWalletView }: Props) {
  // @ts-ignore
  const isMetamask = window.ethereum && window.ethereum.isMetaMask
  return (
    <>
      {Object.keys(SUPPORTED_WALLETS).map((key) => {
        const option = SUPPORTED_WALLETS[key]
        // check for mobile options
        if (isMobile) {
          //disable portis on mobile for now
          if (option.connector === portis) {
            return null
          }
          // @ts-ignore
          if (!window.web3 && !window.ethereum && option.mobile) {
            return (
              <Option
                onClick={() => {
                  option.connector !== connector && !option.href && tryActivation(option.connector)
                }}
                id={`connect-${key}`}
                key={key}
                active={option.connector && option.connector === connector}
                color={option.color}
                link={option.href}
                header={option.name}
                subheader={null}
                icon={'/assets/images/' + option.iconName}
              />
            )
          }
          return null
        }

        // overwrite injected when needed
        if (option.connector === injected) {
          // don't show injected if there's no injected provider
          // @ts-ignore
          if (!(window.web3 || window.ethereum)) {
            if (option.name === 'MetaMask') {
              return (
                <Option
                  id={`connect-${key}`}
                  key={key}
                  color={'#E8831D'}
                  header={'Install Metamask'}
                  subheader={option.description}
                  link={'https://metamask.io/'}
                  icon={'/assets/images/metamask.png'}
                />
              )
            } else {
              return null //dont want to return install twice
            }
          }
          // don't return metamask if injected provider isn't metamask
          else if (option.name === 'MetaMask' && !isMetamask) {
            return null
          }
          // likewise for generic
          else if (option.name === 'Injected' && isMetamask) {
            return null
          }
        }

        // return rest of options
        return (
          !isMobile &&
          !option.mobileOnly && (
            <Option
              id={`connect-${key}`}
              onClick={() => {
                option.connector === connector
                  ? setWalletView(WALLET_VIEWS.ACCOUNT)
                  : !option.href && tryActivation(option.connector)
              }}
              key={key}
              active={option.connector === connector}
              color={option.color}
              link={option.href}
              header={option.name}
              subheader={option.description} //use option.descriptio to bring back multi-line
              icon={'/assets/images/' + option.iconName}
            />
          )
        )
      })}
    </>
  )
}
