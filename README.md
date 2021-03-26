# Uni-wallet-connect

A library extracted from the Uniswap v2 codebase and rewrittten for reusability.
It uses [@web-react](https://github.com/NoahZinsmeister/web3-react#readme) and [ethers.js](https://github.com/ethers-io/ethers.js). 
NextJS is supported by default.


## How to use

See [next example](./packages/next-example) for complete details.

```bash
npm install uni-wallet-connect
# or
yarn add uni-wallet-connect
```



**pages/_app.js**

``` javascript
import { StrictMode, Component } from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import * as uniwallet from 'uni-wallet-connect'
import '../styles/global.css'
import '@reach/dialog/styles.css'

// TODO fix this
class ErrorBoundaryWeb3ProviderNetwork extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }
  render() {
    let Web3ProviderNetwork
    try {
      Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')
    } catch (e) {
      return <>{this.props.children}</>
    }
    if (this.state.hasError) {
      return <>{this.props.children}</>
    }
    return <Web3ProviderNetwork getLibrary={uniwallet.getLibrary}>{this.props.children}</Web3ProviderNetwork>
  }
}
export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Web3ReactProvider getLibrary={uniwallet.getLibrary}>
        <ErrorBoundaryWeb3ProviderNetwork>
          <Component {...pageProps} />
        </ErrorBoundaryWeb3ProviderNetwork>
      </Web3ReactProvider>
    </StrictMode>
  )
}

```

**pages/index.js**

```
import React from "react";
import  * as uniwallet from "uni-wallet-connect";
import {
  AppWrapper,
  HeaderWrapper,
  BodyWrapper,
  Marginer,
  HeaderFrame,
  HeaderControls,
} from "./index.styles";
const {
  Web3StatusManager,
  Web3StatusProvider,
  Updaters,
  URLWarning,
  CurrentBlockNumber,
  Popups,
  Web3Status,
}  = uniwallet;

// Example layout
export function Layout({ children }: { children: JSX.Element }) {
  return (
    <AppWrapper>
      <Web3StatusProvider>
        <URLWarning />
        <Updaters />
        <HeaderWrapper>
          <HeaderFrame>
            <HeaderControls>
              <Web3Status />
            </HeaderControls>
          </HeaderFrame>
        </HeaderWrapper>
        <BodyWrapper>
          <CurrentBlockNumber />
          <Popups />
          <Web3StatusManager>{children}</Web3StatusManager>
          <Marginer />
        </BodyWrapper>
      </Web3StatusProvider>
    </AppWrapper>
  );
}

```


