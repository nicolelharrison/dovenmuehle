const express = require('express');
const router = express.Router();
const Strings = require('../data/strings.js');

router.get('/strings', (req, res) => {
  res.send(JSON.stringify(Strings.get()));
});

router.post('/string', (req, res) => {
  Strings.add(req.body.string);
  res.sendStatus(200);
});

module.exports = router;
