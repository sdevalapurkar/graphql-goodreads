const { ApolloServer } = require("apollo-server");

const types = require("./types");
const resolvers = require("./resolvers");

const server = new ApolloServer({
    typeDefs: types,
    resolvers,
    context: {
        restUrl: "http://localhost:3005"
    }
});

server.listen().then(({ url }) => {
    console.log(`Apollo GraphQL server ready at ${url}`);
});
