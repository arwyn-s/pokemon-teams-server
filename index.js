const express    = require('express');
const dotenv     = require('dotenv');
// const { graphqlHTTP }    = require('express-graphql');
// const { schema, root}    = require('./models/GraphqlSchema')

dotenv.config({path: './config/app.env'});

const app        = express();

const mongoConnect     = require('./config/MongoConnect');
///DOTENV config to use the path
mongoConnect();

const pokemons   = require('./routes/pokemon');

///Express to bodyparser to convert to json.
app.use(express.json());

// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
// }));
//Pokemons routes.
app.use('/api/v1/pokemons',pokemons);
///Default URI.
app.get('*', (req, res) => res.status(204));
///Start the server and listen.


const port = process.env.PORT || 1888;
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`))