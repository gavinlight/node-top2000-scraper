const rp = require('request-promise');
const select = require('cheerio');

const options = {
  uri: `https://www.iheart.com/playlist/hip-hop-and-rb-top-50-312064750-ViFEMBbVN6YdFceSzi234o/` +
    `?_=${Date.now()}`,
  transform: (body) => body,
};

const scrape = (req, res) => {
  rp(options)
    .then((html) => {
      let playlist = [];
      let songs = select('.playlistListContainer .playlistList > .playlist-row', html);

      if (songs && songs.length) {
        songs.each((i, song) => {
          playlist.push({
            id: (i + 1),
            song: select('[data-test="song-row-song-title"] a', song).text(),
            album: select('.album-subtitle a', song).text(),
            artist: select('.artist a', song).text(),
          });
        });

        res.json({
          type: 'success',
          data: playlist,
          message: 'Successfully scraped playlist'
        });
      } else {
        res.json({
          type: 'error',
          data: 'No songs found',
          message: 'An error occured'
        })
      }
    })
    .catch((err) => {
      res.json({
        type: 'error',
        data: err,
        message: 'An error occured'
      })
    });
};

module.exports = scrape;
