import {ApolloServer} from 'apollo-server-koa';
import Koa from 'koa';
import {typeDefs} from './schema/types';
import {resolvers} from './schema/resolvers';

const port: number = 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // TODO: initiate the context
});

const app = new Koa();
server.applyMiddleware({app});

app.listen({port}, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
