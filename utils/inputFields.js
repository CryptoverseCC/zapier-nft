module.exports = [
  {
    key: 'kitty_id',
    label: 'Kitti id',
    helpText: 'Id of kitty whom purrs should be observed.',
    type: 'integer',
    required: true,
  },
  {
    key: 'network',
    label: 'Ethereum network',
    type: 'string',
    default: 'ethereum',
    choices: ['ethereum', 'rinkeby', 'ropsten', 'kovan'],
    required: true,
  },
  {
    key: 'contract',
    label: 'ERC721 Contract address',
    type: 'string',
    default: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
    required: true,
  },
  {
    key: 'api_url',
    type: 'string',
    label: 'Userfeeds API URL',
    default: 'https://api-dev.userfeeds.io',
    choices: [
      'https://api-dev.userfeeds.io',
      'https://api-staging.userfeeds.io',
      'https://api.userfeeds.io',
    ],
    required: true,
  },
];
