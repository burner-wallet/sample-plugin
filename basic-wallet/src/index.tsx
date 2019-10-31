import React from 'react';
import ReactDOM from 'react-dom';
import { NativeAsset, ERC20Asset } from '@burner-wallet/assets';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway, InjectedGateway, XDaiGateway, } from '@burner-wallet/core/gateways';
import Exchange, { Uniswap, XDaiBridge } from '@burner-wallet/exchange';
import ModernUI from '@burner-wallet/modern-ui';
import MyPlugin from 'my-plugin';

const rinkebyETH = new NativeAsset({
  id: 'reth',
  name: 'rETH',
  network: '4',
});
const rinkebyToken = new ERC20Asset({
  id: 'rinkebyToken',
  name: 'Rinkeby Token',
  network: '4',
  address: '0x1212121212121212121212121212121212121212', // Enter your token address here
});

const core = new BurnerCore({
  signers: [new InjectedSigner(), new LocalSigner()],
  gateways: [
    new InjectedGateway(),
    new InfuraGateway(process.env.REACT_APP_INFURA_KEY),
    new XDaiGateway(),
  ],
  assets: [rinkebyETH, rinkebyToken],
});

const BurnerWallet = () =>
  <ModernUI
    title="Basic Wallet"
    core={core}
    plugins={[new MyPlugin()]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
