import React from 'react'
import styled from 'styled-components'
import { Web3ReactManager } from './Web3ReactManager'
import { Header } from './Header'
import { ApplicationProvider } from '../../state/state.provider'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export function Layout({ children }: {children: JSX.Element}) {
  return (
    <AppWrapper>
      <ApplicationProvider>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Web3ReactManager>{children}</Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </ApplicationProvider>
    </AppWrapper>
  )
}
