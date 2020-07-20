import {DateTimeResolver} from 'graphql-scalars';
import {
    createTweet,
    createUser,
    deleteUser,
    getAllTweets,
    getAllUsers,
    getTweetsByUsername,
    getUserByUsername
} from "../dal/entities-connectors";
import {UserInputError} from 'apollo-server';

export const resolvers = {
    Query: {
        allUsers(obj: any, args: any, context: any, info: any) {
            return getAllUsers();
        },
        allTweets(obj: any, args: any, context: any, info: any) {
            return getAllTweets();
        },
        userByUsername(obj: any, args: any, context: any, info: any) {
            return getUserByUsername(args.username);
        },
        allUsersAndTweets(obj: any, args: any, context: any, info: any) {
            return [...getAllTweets(), ...getAllUsers()];
        },
        tweetsByUsername(obj: any, args: any, context: any, info: any) {
            return getTweetsByUsername(args.username);
        },
    },
    Mutation: {
        createTweet(obj: any, args: any, context: any, info: any) {
            const username: string = context.headers.username;
            return createTweet(args.body, username);
        },
        createUser(obj: any, args: any, context: any, info: any) {
            const user = args.user;
            return createUser(user.username, user.password, user.firstName, user.lastName);
        },
        deleteUser(obj: any, args: any, context: any, info: any) {
            return deleteUser(args.username);
        },
        updateUserAvatar(obj: any, args: any, context: any, info: any) {
            const username: string = context.headers.username;
            const user: User | undefined = getUserByUsername(username);
            if (!user) {
                throw new UserInputError('please provide a valid username header');
            }
            user.avatarUrl = args.avatarUrl;
            return user;
        },
    },
    User: {
        name: (user: any) => user.firstName + ' ' + user.lastName
    },
    Result: {
        __resolveType(obj: any, context: any, info: any) {
            if (obj.body) {
                return 'Tweet';
            }

            if (obj.username) {
                return 'User';
            }

            return null;
        },
    },
    DateTime: DateTimeResolver,
};
