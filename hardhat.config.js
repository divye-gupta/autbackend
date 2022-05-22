/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

const fs = require("fs")
const privatekey = fs.readFileSync(".secret").toString()


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/8f667802a61941caaadd0e3e3c51b98e',
      accounts: [privatekey]
    },

  mainnet: {
    url: 'https://mainnet.infura.io/v3/8f667802a61941caaadd0e3e3c51b98e',
    accounts: [privatekey]
  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}