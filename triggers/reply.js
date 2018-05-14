const fetch = require('../utils/fetch');
const inputFields = require('../utils/inputFields');
const etherscan = require('../utils/etherscan');
const cryptoPurr = require('../utils/cryptoPurr');

const listReplys = (z, bundle) => {
  const { contract ,token_id } = bundle.inputData;

  return fetch.purrs(z, bundle).then(items =>
    items
      .filter(item => item.type === 'response')
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
  key: 'reply',
  noun: 'Reply',
  display: {
    label: 'Reply',
    description: 'Triggers on reply.',
  },

  operation: {
    inputFields: inputFields,

    perform: listReplys,

    sample: {
      id:
        'claim:0x808f50d0a48be024316eda2ca918f4a38be6f6118ca0cfebafdd6602e018dbdd:0',
      createdAt: 1522690084000,
      author: '0x9093428aa6266d589b866ac2956e328ab9039bee',
      content: "I'm impressed, purred out!",
      etherscan_url: 'https://kovan.etherscan.io/tx/0x808f50d0a48be024316eda2ca918f4a38be6f6118ca0cfebafdd6602e018dbdd',
    },

    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'created_at', label: 'Created At' },
      { key: 'author', label: 'Author address' },
      { key: 'content', label: 'Reply content' },
      { key: 'link', label: 'Link' },
      { key: 'etherscan_url', label: 'Etherscan url to post' },
    ],
  },
};
