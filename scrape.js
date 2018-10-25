const rp = require('request-promise');

const options = {
  uri: `https://www.nporadio2.nl/top2000`,
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
