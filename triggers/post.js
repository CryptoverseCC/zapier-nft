const fetch = require('../utils/fetch');
const inputFields = require('../utils/inputFields');
const etherscan = require('../utils/etherscan');
const cryptoPurr = require('../utils/cryptoPurr');
const hydrators = require('../utils/hydrators');

const listPosts = (z, bundle) => {
  const { contract ,token_id } = bundle.inputData;

  return fetch.purrs(z, bundle).then(items =>
    items
      .filter(item => item.type === 'regular')
      .map(item => ({
        id: item.id,
        author: item.author,
        created_at: item.created_at,
        content: item.target && item.target.id,
        link: cryptoPurr.getLink(contract, token_id),
        etherscan_url: etherscan.getUrlForMessage(item),
      }))
  );
};

module.exports = {
  key: 'post',
  noun: 'Post',
  display: {
    label: 'Post',
    description: 'Triggers on a new post.',
  },

  operation: {
    inputFields: inputFields,

    perform: listPosts,

    sample: {
      id:
        'claim:0xd87fbe04e51c55bbd90b3dcfbd48046311427038dfbb5597c533f85c5a85e7bf:0',
      createdAt: 1521748632000,
      author: '0x6b7eb2e2084ad4f3606a5f082195c0121c0efa3b',
      content: 'I \u2764 catnip',
      link: 'https://cryptopurr.co/123421',
      etherscan_url:
      'https://kovan.etherscan.io/tx/0xd87fbe04e51c55bbd90b3dcfbd48046311427038dfbb5597c533f85c5a85e7bf',
    },

    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'created_at', label: 'Created At' },
      { key: 'author', label: 'Author address' },
      { key: 'content', label: 'Purr content' },
      { key: 'link', label: 'Link' },
      { key: 'etherscan_url', label: 'Etherscan url to purr' },
    ],
  },
};
