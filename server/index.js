const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../db/index.js');

const server = express();
const port = 3000;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));
server.use(morgan('dev'));
server.use(cors());

server.listen(port, () => console.log(`App listening at http://localhost:${port}`));

server.use(express.static(path.join(__dirname, '../client/dist')));

server.get('/api/:productId', (req, res) => {
  let { productId } = req.params;

  db.getReviews(productId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = server;