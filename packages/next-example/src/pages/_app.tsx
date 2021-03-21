import Wallet from '@uni/wallet';

export default function App({ Component, pageProps }) {
  return <Wallet><Component {...pageProps} /></Wallet>
}
