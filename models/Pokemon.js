const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    pokedex_id: Number,
    name: String,
    types: {
        primary: String,
        secondary: String
    },
    generation: Number
}, {collection: 'all_pokemon'});

module.exports = mongoose.model('Pokemon', PokemonSchema);