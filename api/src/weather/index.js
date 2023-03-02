const express = require(`express`);

const { getWeather } = require(`./getWeather.js`);

const router = express.Router();

router.get(`/:city`, getWeather);

router.get(`/`, (req, res) => {
  res.send(`The weather api`);
});

module.exports = router;
