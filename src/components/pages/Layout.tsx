import React from 'react'
import { Web3ReactManager } from '../Web3Status/Web3ReactManager'
import { Header } from './Header'
import { ApplicationProvider } from '../../state/state.provider'
import { AppWrapper, HeaderWrapper, BodyWrapper, Marginer } from './Layout.sytles'

export function Layout({ children }: { children: JSX.Element }) {
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
