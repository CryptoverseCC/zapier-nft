const purrs = (z, bundle) => {
  const { api_url, network, contract, token_id } = bundle.inputData;

  const requestOptions = {
    method: 'GET',
    url: `${api_url}/ranking/cryptopurr_feed;context=${network}:${contract.toLowerCase()}:${token_id}`,
  };

  return z
    .request(requestOptions)
    .then(response => z.JSON.parse(response.content))
    .then(data => data.items)
    .catch(e => z.console.error(e))
};

module.exports = {
  purrs,
};
