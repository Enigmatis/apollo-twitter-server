import {typeDefs} from './schema/types';
import {resolvers} from './schema/resolvers';
import {ApolloServer} from 'apollo-server';
import express from 'express';

const PORT = 4000;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // TODO: initiate the context
});

app.use(server.getMiddleware());

app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
