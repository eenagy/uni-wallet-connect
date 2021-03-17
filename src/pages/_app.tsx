import { StrictMode, Component } from 'react'
import { ThemeProvider, ThemedGlobalStyle } from '../theme'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from '../utils/getLibrary'
import { NetworkContextName } from '../constants'

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
      Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)
    } catch (e) {
      return <>{this.props.children}</>
    }
    if (this.state.hasError) {
      return <>{this.props.children}</>
    }
    return <Web3ProviderNetwork getLibrary={getLibrary}>{this.props.children}</Web3ProviderNetwork>
  }
}

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ErrorBoundaryWeb3ProviderNetwork>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </ErrorBoundaryWeb3ProviderNetwork>
      </Web3ReactProvider>
    </StrictMode>
  )
}
