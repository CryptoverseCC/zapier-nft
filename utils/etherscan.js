const getUrlForPurr = purr => {
  const { family, id } = purr;
  const [, tx] = id.split(':');

  return `https://${
    family === 'ethereum' ? '' : `${family}.`
  }etherscan.io/tx/${tx}`;
};

module.exports = { getUrlForPurr };
