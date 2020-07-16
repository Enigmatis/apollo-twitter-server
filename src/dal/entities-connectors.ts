import {tweets, users} from './data';
import {UserInputError} from 'apollo-server';
import * as lodash from 'lodash';
import {v4 as uuidv4} from 'uuid';

export function getAllUsers(): User[] {
    return users;
}

export function getUserByUsername(username: String): User | undefined {
    return lodash.find(users, user => user.username === username);
}

export function getTweetsByUsername(username: String): Tweet[] {
    const user = getUserByUsername(username);
    if (!user) {
        throw new UserInputError('Cannot find user with the provided username');
    }
    return user.tweets;
}

export function createUser(username: string,
                           password: string,
                           firstName: string,
                           lastName: string): User {
    if (getUserByUsername(username)) {
        throw new UserInputError('The username is already taken!');
    }
    const newUser: User = {
        id: uuidv4(),
        firstName,
        lastName,
        username,
        password,
        tweets: [],
    };
    users.push(newUser);
    return newUser;
}

export function deleteUser(username: String): User | undefined {
    const user = getUserByUsername(username);
    if (!user) {
        throw new UserInputError('Cannot find user with the provided username');
    }
    lodash.forEach(user.tweets, tweet => deleteTweet(tweet.id));
    return lodash.remove(users, user => user.username === username)[0];
}

export function getAllTweets(): Tweet[] {
    return tweets;
}

export function createTweet(body: string,
                            username: String): Tweet {
    const user = getUserByUsername(username);
    if (!user) {
        throw new UserInputError('Cannot find user with the provided username or the user does not exist');
    }
    const newTweet: Tweet = {
        id: uuidv4(),
        date: new Date(),
        body,
        user,
    };
    user.tweets.push(newTweet);
    tweets.push(newTweet);
    return newTweet;
}

export function deleteTweet(id: string): Tweet | undefined {
    return lodash.remove(tweets, tweet => tweet.id === id)[0];
}
