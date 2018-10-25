const express = require('express');
const app = express();
const port = 3000;

const scrape = require('./scrape');

app.get('/', scrape);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
