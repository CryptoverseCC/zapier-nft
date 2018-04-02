const purrs = (z, bundle) => {
  const { api_url, network, contract } = bundle.inputData;

  const requestOptions = {
    method: 'GET',
    url: `${api_url}/ranking/feed;context=${network}:${contract}`,
  };

  return z
    .request(requestOptions)
    .then(response => z.JSON.parse(response.content))
    .then(data => data.items);
};

module.exports = {
  purrs,
};
