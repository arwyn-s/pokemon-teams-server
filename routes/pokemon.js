const express    = require('express');
const router     = express.Router();

const { getPokemons } = require('../controller/pokemon');

router.route("/").get(getPokemons);

module.exports = router;