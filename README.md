# Sample Burner Wallet 2 Plugin

This repo provides a boilerplate for building a new plugin for the Burner Wallet 2.

## Setup

1. Clone the repo
2. Run `yarn install`. This repo uses Lerna and Yarn Workspaces, so `yarn install` will install
  all dependencies and link modules in the repo
3. Run `yarn start-local` to start the wallet while connected to Ganache, or run `yarn start-basic`
  to start the wallet connected to Mainnet & xDai

## Renaming the plugin

To rename the plugin from "MyPlugin" to your own plugin name, you must update the following locations:

1. Rename the `my-plugin` directory
2. Change `my-plugin` in `lerna.json` and the root `package.json`
3. Change the name field in `package.json` in your plugin's `package.json` file
4. Rename `MyPlugin.ts`
5. Change `MyPlugin.js` and `MyPlugin.d.ts` in the plugin `package.json` file
6. Change the class name in the main plugin file
7. Change rename `my-plugin` dependency in `basic-wallet/package.json` & `local-wallet/package.json`
8. In `basic-wallet/src/index.tsx` and `local-wallet/src/index.tsx`, update the import
  `import MyPlugin from 'my-plugin';` as well as the `new MyPlugin()` constructor.
9. Finally, run `yarn install` in the root to re-link the packages
