import * as ReactDOM from 'react-dom';
import * as React from "react";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import * as uniwallet from "../uni-wallet-connect";
import "uni-wallet-connect/dist/uni-wallet-connect.cjs.production.min.css";


class ErrorBoundaryWeb3ProviderNetwork extends React.Component<
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
export function App() {
  return (
    <React.StrictMode>
      <Web3ReactProvider getLibrary={uniwallet.getLibrary}>
        <ErrorBoundaryWeb3ProviderNetwork>
          hello world
        </ErrorBoundaryWeb3ProviderNetwork>
      </Web3ReactProvider>
    </React.StrictMode>
  );
}



ReactDOM.render(<App />, document.getElementById('root'));
