const {
  cryptoKittiesContractAddress,
  cryptoBotsContractAddress,
  ethmojiContractAddress,
  robohashContractAddress,
  digitalArtContractAddress,
} = require('./contracts');

const getLink = (contract, tokenId) => {
  switch(contract) {
    case cryptoKittiesContractAddress:
      return `https://cryptopurr.co/${tokenId}`;
    case cryptoBotsContractAddress:
      return `https://userfeeds.github.io/cryptobeep/${tokenId}`;
    case ethmojiContractAddress:
      return `https://userfeeds.github.io/cryptomoji/${tokenId}`;
    case robohashContractAddress:
      return `https://userfeeds.github.io/robohash-book/${tokenId}`;
    case digitalArtContractAddress:
      return `http://story.digitalartchain.com/${tokenId}`;
  }
  return `${contract}:${tokenId}`
}

module.exports = { getLink };