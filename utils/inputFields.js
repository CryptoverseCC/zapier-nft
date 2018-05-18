const {
  cryptoKittiesContractAddress,
  cryptoBotsContractAddress,
  ethmojiContractAddress,
  robohashContractAddress,
  digitalArtContractAddress,
} = require('./contracts');

module.exports = [
  {
    key: 'contract',
    label: 'ERC721 Contract address',
    type: 'string',
    default: cryptoKittiesContractAddress,
    choices: {
      [cryptoKittiesContractAddress]: 'Cryptokitties',
      [cryptoBotsContractAddress]: 'CryptoBots',
      [ethmojiContractAddress]: 'Ethmoji',
      [robohashContractAddress]: 'Robohash',
      [digitalArtContractAddress]: 'DigitalArtChain'
    },
    required: true,
    altersDynamicFields: true,
  },
  (z, bundle) => {
    const contract = bundle.inputData.contract
    let choices = ['ethereum'];
    if ([cryptoKittiesContractAddress, cryptoBotsContractAddress, ethmojiContractAddress, robohashContractAddress, digitalArtContractAddress].indexOf(contract) === -1) {
      choices = ['ethereum', 'kovan', 'rinkeby', 'ropsten'];
    }

    return {
      key: 'network',
      label: 'Ethereum network',
      type: 'string',
      choices: choices,
      default: choices[0],
      required: true,
    };
  },
  {
    key: 'token_id',
    label: 'Token id',
    helpText: 'ERC 721 token id.',
    type: 'integer',
    required: true,
  },
  {
    key: 'api_url',
    type: 'string',
    label: 'Userfeeds API URL',
    default: 'https://api.userfeeds.io',
    choices: {
      'https://api-dev.userfeeds.io': 'api-dev',
      'https://api-staging.userfeeds.io': 'api-staging',
      'https://api.userfeeds.io': 'api-prod',
    },
    required: true,
  },
];
