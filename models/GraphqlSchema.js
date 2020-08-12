const { buildSchema } = require("graphql");

const schema = buildSchema(`    
    type Query {
        hello: String
}`);

const root = {
    hello: () => { return 'Hello World';},
};

exports.schema = schema;
exports.root = root;