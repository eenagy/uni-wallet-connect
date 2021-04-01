import * as React from "react";
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
