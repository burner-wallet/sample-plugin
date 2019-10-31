import { BurnerPluginContext, Plugin, Actions } from '@burner-wallet/types';
import MyPage from './ui/MyPage';
import MyElement from './ui/MyElement';

interface PluginActionContext {
  actions: Actions;
}

export default class MyPlugin implements Plugin {
  private pluginContext?: BurnerPluginContext;

  initializePlugin(pluginContext: BurnerPluginContext) {
    this.pluginContext = pluginContext;

    pluginContext.addPage('/my-page', MyPage);
    pluginContext.addButton('apps', 'My Plugin', '/my-page', {
      description: 'Sample plugin page',
    });
    pluginContext.addElement('home-middle', MyElement);

    onQRScanned: ((scan: string, ctx: PluginActionContext) => {
      if (scan === 'My Plugin') {
        ctx.actions.navigateTo('/my-page');
        return true;
      }
    });
  }

  async getBlockNum() {
    const assets = this.pluginContext!.getAssets();
    const web3 = this.pluginContext!.getWeb3(assets[0].network);
    const blockNum = web3.eth.getBlockNumber();
    return blockNum;
  }
}
