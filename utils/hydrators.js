const stashPurrImage = (z, bundle) => {
  const { token_id, etherscan_url, link, content } = bundle.inputData;

  const purrUrl = `https://userfeeds.io/purr?token_id=${token_id}&etherscan_url=${encodeURIComponent(
    etherscan_url
  )}&link=${encodeURIComponent(link)}&content=${encodeURIComponent(content)}`;

  z.console.log(`Purr url = ${purrUrl}`);

  const filePromise = z.request({
    method: 'POST',
    url: 'https://apileap.com/api/screenshot/v1/urltoimage?fresh=true',
    raw: true,
    form: {
      access_key: '2d07cafe30de41aea7efa87e6789aecd',
      url: purrUrl,
      width: 1020,
      height: 765,
      delay: 1,
    },
  });

  return filePromise.then(res => {
    if (res.status >= 200 && res.status < 300) {
      z.console.log(
        `Fetching screen ok = ${res.ok}`,
        res.getHeader('content-length')
      );

      return z.stashFile(filePromise).then(url => {
        z.console.log(`Stashed URL = ${url}`);
        return url;
      });
    }

    return res
      .text()
      .then(content => z.console.log(`Screen response ${res.ok} ${content}`))
      .then(() => Promise.resolve('http://via.placeholder.com/300'));
  });
};

module.exports = {
  stashPurrImage,
};
