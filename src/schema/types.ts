import {gql} from 'apollo-server-koa';

//TODO: add type definitions
export const typeDefs = gql`
  type Query {
        helloWorld: String
    }
`;
