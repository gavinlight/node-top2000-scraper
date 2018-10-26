const rp = require('request-promise');

const options = {
  uri: 'https://www.iheart.com/playlist/hip-hop-and-rb-top-50-312064750-ViFEMBbVN6YdFceSzi234o/',
  transform: (body) => body,
};

const scrape = (req, res) => {
  rp(options)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  res.send('Scraping page...');
};

module.exports = scrape;
