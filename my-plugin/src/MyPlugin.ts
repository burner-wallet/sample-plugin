import { BurnerPluginContext, Plugin } from '@burner-wallet/types';
import MyPage from './ui/MyPage';
import MyElement from './ui/MyElement';

export default class MyPlugin implements Plugin {
  initializePlugin(pluginContext: BurnerPluginContext) {
    pluginContext.addPage('/my-page', MyPage);
    pluginContext.addButton('apps', 'My Plugin', '/my-page', {
      description: 'Sample plugin page',
    });
    pluginContext.addElement('home-middle', MyElement);
  }
}
