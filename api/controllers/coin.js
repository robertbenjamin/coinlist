const express = require('express');
const coins = require('coinlist');

const router = express.Router();

router.get('/', (req, res) => res.json(coins));

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const coin = coins.find(c => c.id === id);
  return coin ? res.json(coin) : res.status(404).send('Can\'t find that coin.');
});

module.exports = router;
