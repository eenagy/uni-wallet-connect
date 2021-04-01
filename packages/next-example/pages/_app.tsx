import { StrictMode, Component } from "react";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import * as uniwallet from "uni-wallet-connect";
import "uni-wallet-connect/dist/uni-wallet-connect.cjs.production.min.css";
import "@reach/dialog/styles.css";

class ErrorBoundaryWeb3ProviderNetwork extends Component<
  {},
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    let Web3ProviderNetwork;
    try {
      Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");
    } catch (e) {
      return <>{this.props.children}</>;
    }
    if (this.state.hasError) {
      return <>{this.props.children}</>;
    }
    return (
      <Web3ProviderNetwork getLibrary={uniwallet.getLibrary}>
        {this.props.children}
      </Web3ProviderNetwork>
    );
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
  );
}
