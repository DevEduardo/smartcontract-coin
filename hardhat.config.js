require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    Goerli: {
      url: `${process.env.POKT_GOERLI_URL}`,
      accounts: [`${process.env.GOERLI_PRIVATE_KEY}`],
    } 
  }
};