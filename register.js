#!/usr/bin/env node

const { WarpFactory } = require('warp-contracts')
const { DeployPlugin } = require('warp-contracts-plugin-deploy')

async function main() {
  const args = process.argv.slice(2)
  //const assetId = 'fsxlnMB_OHQJJwnd-2uuGNOr9JrLRhyEnBPnIxHgzII'
  if (!args[0]) {
    return console.log('PROPER ATOMIC ASSET is required! asset-registar <dataId>')
  }

  if (args[0] && args[0].length !== 43) {
    return console.log('PROPER ATOMIC ASSET is required!  asset-registar <dataId>')
  }
  const assetId = args[0]
  const warp = WarpFactory.forMainnet().use(new DeployPlugin())
  const result = await warp.register(assetId, 'arweave')
  console.log('registered: ', result)
}

main()

