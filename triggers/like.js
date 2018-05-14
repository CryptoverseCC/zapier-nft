const fetch = require('../utils/fetch');
const inputFields = require('../utils/inputFields');
const etherscan = require('../utils/etherscan');
const cryptoPurr = require('../utils/cryptoPurr');

const listLikes = (z, bundle) => {
  const { contract ,token_id } = bundle.inputData;

  return fetch.purrs(z, bundle).then(items =>
    items
      .filter(item => item.type === 'like')
      .map(item => ({
        id: item.id,
        author: item.author,
        created_at: item.created_at,
        content: item.target && item.target.target && item.target.target.id,
        link: cryptoPurr.getLink(contract, token_id),
        etherscan_url: etherscan.getUrlForMessage(item),
      }))
  );
};

module.exports = {
  key: 'like',
  noun: 'Like',
  display: {
    label: 'Like',
    description: 'Triggers on like.',
  },

  operation: {
    inputFields: inputFields,

    perform: listLikes,

    sample: {
      id:
        'claim:0x9aca0b21d307aef5db67445201aff00644f0e516c839edb2d4b12379eb791c49:0',
      createdAt: 1522693740000,
      author: '0x460031ae4db5720d92a48fecf06a208c5099c186',
      content: 'I \u2764 catnip',
      etherscan_url: 'https://kovan.etherscan.io/tx/0x9aca0b21d307aef5db67445201aff00644f0e516c839edb2d4b12379eb791c49',
    },

    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'created_at', label: 'Created At' },
      { key: 'author', label: 'Author address' },
      { key: 'content', label: 'Liked content' },
      { key: 'link', label: 'Link' },
      { key: 'etherscan_url', label: 'Etherscan url to post' },
    ],
  },
};
