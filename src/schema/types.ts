import {gql} from 'apollo-server';

export const typeDefs = gql`
    type Tweet {
        id: ID!
        body: String
        date: DateTime
        user: User
    }
    
    type User {
        id: ID!
        username: String
        password: String
        firstName: String
        lastName: String
        name: String @deprecated
        avatarUrl: String
        tweets: [Tweet]!
    }
    
    input UserInput {
        username: String!
        password: String!
        firstName: String!
        lastName: String!
    }
    
    scalar DateTime
    
    union Result = Tweet | User
    
    type Query {
        allUsers: [User]!
        allTweets: [Tweet]!
        userByUsername(username: String!): User
        allUsersAndTweets: [Result]
        tweetsByUsername(username: String!): [Tweet]!
    }
    
    type Mutation {
        createTweet(body: String!): Tweet
        createUser(user: UserInput!): User
        deleteUser(username: String!): User
        updateUserAvatar(avatarUrl: String!): User
    }
`;
