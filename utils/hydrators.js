const stashPurrImage = (z, bundle) => {
  const { kitty_id, etherscan_url, link, content } = bundle.inputData;

  const purrUrl = `https://userfeeds.io/purr?kitty_id=${kitty_id}&etherscan_url=${encodeURIComponent(
    etherscan_url
  )}&link=${encodeURIComponent(link)}&content=${encodeURIComponent(content)}`;

  z.console.log(`Purr url = ${purrUrl}`);

  const filePromise = z.request({
    method: 'GET',
    url: 'https://apileap.com/api/screenshot/v1/urltoimage',
    raw: true,
    params: {
      access_key: '2d07cafe30de41aea7efa87e6789aecd',
      url: purrUrl,
      width: 1020,
      height: 765,
      delay: 1,
    },
  });

  filePromise.then((res) => {
    if (res.status >= 200 && res.status < 300) {
      z.console.log('Fetching screen ok');
    } else {
      response.text().then(content => z.console.log(`Screen response ${content}`));
    }
  })

  return z.stashFile(filePromise).then(url => {
    z.console.log(`Stashed URL = ${url}`);
    return url;
  });
};

module.exports = {
  stashPurrImage,
};
