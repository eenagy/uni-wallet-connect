import React from 'react'
import { Web3ReactManager } from '../Web3Status/Web3ReactManager'
import { Header } from './Header'
import { Web3StatusProvider } from '../../state/Web3Status.provider'
import { AppWrapper, HeaderWrapper, BodyWrapper, Marginer } from './Layout.sytles'

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <AppWrapper>
      <Web3StatusProvider>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Web3ReactManager>{children}</Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </Web3StatusProvider>
    </AppWrapper>
  )
}
