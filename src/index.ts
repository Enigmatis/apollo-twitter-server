import {typeDefs} from './schema/types';
import {resolvers} from './schema/resolvers';
import {ApolloServer} from 'apollo-server';
import express from 'express';

const PORT = 4000;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (context: { req: express.Request, res: express.Response }) => ({
        headers: context.req.headers,
        body: context.req.body,
    }),
});

app.use(server.getMiddleware());

app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
