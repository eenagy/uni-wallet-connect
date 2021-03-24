import React from 'react'
import { Web3StatusManager, Web3StatusProvider, Updaters, URLWarning, CurrentBlockNumber, Popups } from '../../Web3Status'
import { Header } from './Header'
import { AppWrapper, HeaderWrapper, BodyWrapper, Marginer } from './index.styles'

// Example layout
export function Layout({ children }: { children: JSX.Element }) {
  return (
    <AppWrapper>
      <Web3StatusProvider>
        <URLWarning />
        <Updaters />
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <CurrentBlockNumber />
          <Popups />
          <Web3StatusManager>{children}</Web3StatusManager>
          <Marginer />
        </BodyWrapper>
      </Web3StatusProvider>
    </AppWrapper>
  )
}
