const CoinController = require('./controllers/coin');

module.exports = (app) => {
  app.use('/coins', CoinController);

  app.get('*', (req, res) => res
    .status(404)
    .send('Uh oh, this route doesn\'t exist'));
};
