import { Identicon } from './Identicon'
import styled from 'styled-components'
import { fortmatic, injected, portis, walletconnect, walletlink } from './connectors'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Image from 'next/image'
import { ButtonSecondary } from '../common/Button'

export const WalletAction = styled(ButtonSecondary)`
  width: fit-content;
  font-weight: 400;
  margin-left: 8px;
  font-size: 0.825rem;
  padding: 4px 6px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const MainWalletAction = styled(WalletAction)`
  color: ${({ theme }) => theme.primary1};
`
export const IconWrapper = styled.div<{ size?: number; end?: boolean }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  margin-right: ${({ end }) => (end ? '8px' : '')};
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
  ${({ theme, end }) =>
    end
      ? theme.mediaWidth.upToMedium`
    align-items: flex-end;
  `
      : ''};
`
export function StatusIcon({ connector, end }: { connector?: AbstractConnector; end?: boolean }) {
  if (connector === injected) {
    return (
      <IconWrapper size={16} end={end}>
        <Identicon />
      </IconWrapper>
    )
  } else if (connector === walletconnect) {
    return (
      <IconWrapper size={16} end={end}>
        <Image src={'/assets/images/walletConnectIcon.svg'} alt={''} layout="fill" />
      </IconWrapper>
    )
  } else if (connector === walletlink) {
    return (
      <IconWrapper size={16} end={end}>
        <Image src={'/assets/images/coinbaseWalletIcon.svg'} alt={''} layout="fill" />
      </IconWrapper>
    )
  } else if (connector === fortmatic) {
    return (
      <IconWrapper size={16} end={end}>
        <Image src={'/assets/images/fortmaticIcon.png'} alt={''} layout="fill" />
      </IconWrapper>
    )
  } else if (connector === portis) {
    return (
      <IconWrapper size={16} end={end}>
        <Image src={'/assets/images/portisIcon.png'} alt={''} layout="fill" />
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
  return null
}
