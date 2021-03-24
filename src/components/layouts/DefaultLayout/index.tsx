import React from 'react'
import { Web3ReactManager } from '../../Web3Status/Web3ReactManager'
import { Header } from './Header'
import { Web3StatusProvider } from '../../Web3Status/Web3Status.provider'
import { AppWrapper, HeaderWrapper, BodyWrapper, Marginer } from './index.sytles'
import { Updaters } from '../../Web3Status/updaters'
import { CurrentBlockNumber } from '../../Web3Status/CurrentBlockNumber'
import { URLWarning } from '../../Web3Status/URLWarning'
import { Popups } from '../../Web3Status/Popups'

// Example
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
          <Web3ReactManager>{children}</Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </Web3StatusProvider>
    </AppWrapper>
  )
}
