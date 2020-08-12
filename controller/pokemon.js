const Pokemon = require("../models/Pokemon");

// @desc    get all pokemon.
// @route   GET api/v1/pokemons.
// @access  public.

exports.getPokemons = async (req, res, next) => {
	//console.log(req.query);
	console.log(`Processing request with queries ${JSON.stringify(req.query)}`)
	try {
		if (req.query.type || req.query.gen) {
			const typeQuery = req.query.type
				? {
						$or: [
							{ "types.primary": req.query.type },
							{ "types.secondary": req.query.type },
						],
				  }
				: {};
			const genQuery = req.query.gen ? { generation: req.query.gen } : {};
			pokemons = await Pokemon.find({
				$and: [typeQuery, genQuery],
			})
				.skip(Number(req.query.skip) || 0)
				.limit(Number(req.query.limit || 0));
		} else {
			pokemons = await Pokemon.find()
				.skip(Number(req.query.skip) || 0)
				.limit(Number(req.query.limit || 0));
		}
		console.log(`sending result of length: ${pokemons.length}`)
		return res.status(200).json({
			success: true,
			count: pokemons.length,
			data: pokemons,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "SERVER ERROR",
		});
	}
};
