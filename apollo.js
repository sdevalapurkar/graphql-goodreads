const { ApolloServer } = require("apollo-server");

const types = require("./types");
const resolvers = require("./resolvers");

const server = new ApolloServer({
    typeDefs: types,
    resolvers,
    introspection: true,
    playground: true,
    context: {
        restUrl: "http://localhost:3005"
    }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
