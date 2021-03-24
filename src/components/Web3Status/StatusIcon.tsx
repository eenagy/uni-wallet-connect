import { Identicon } from './Identicon'
import styled from 'styled-components'
import { fortmatic, injected, portis, walletconnect, walletlink } from './connectors'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Image from 'next/image'
import { ReactNode } from 'react'
import clsx from 'clsx'

// TODO try out different connectors
const ButtonSecondary = styled.div`
  background-color: transparent;
  font-size: 16px;
  border-radius: 12px;

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.primary4};
    border: 1px solid ${({ theme }) => theme.primary3};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
  a:hover {
    text-decoration: none;
  }
`
export const MainWalletAction = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 ml-2 text-sm font-normal text-pink-500 border border-pink-200 border-solid rounded-md hover:cursor-pointer focus:shadow-md focus:border-pink-300 hover:border-pink-300 active:shadow-md active:border-pink-300"
      style={{ width: 'fit-content' }}
    >
      {children}
    </button>
  )
}

export const IconWrapper = ({ children, end }: { children: ReactNode; end?: boolean }) => {
  return (
    <div className={clsx('flex flex-col items-center justify-center w-4 h-4', end && 'items-end mr-2')}>{children}</div>
  )
}
export function StatusIcon({ connector, end }: { connector?: AbstractConnector; end?: boolean }) {
  if (connector === injected) {
    return <Identicon />
  } else if (connector === walletconnect) {
    return (
      <IconWrapper end={end}>
        <Image src={'/assets/images/walletConnectIcon.svg'} alt={''} width={16} height={16} />
      </IconWrapper>
    )
  } else if (connector === walletlink) {
    return (
      <IconWrapper end={end}>
        <Image src={'/assets/images/coinbaseWalletIcon.svg'} alt={''} width={16} height={16} />
      </IconWrapper>
    )
  } else if (connector === fortmatic) {
    return (
      <IconWrapper end={end}>
        <Image src={'/assets/images/fortmaticIcon.png'} alt={''} width={16} height={16} />
      </IconWrapper>
    )
  } else if (connector === portis) {
    return (
      <IconWrapper end={end}>
        <Image src={'/assets/images/portisIcon.png'} alt={''} width="16px" height="16px" />
        {end && (
          <MainWalletAction
            onClick={() => {
              portis.portis.showPortis()
            }}
          >
            Show Portis
          </MainWalletAction>
        )}
      </IconWrapper>
    )
  }
  return null;
}
