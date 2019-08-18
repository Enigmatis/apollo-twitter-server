import {users, tags, tweets} from "./data";
import {UserInputError} from "apollo-server-koa";

export function getAllUsers(): User[] {
    return users;
}

export function getUserByUsername(username: String): User | undefined {
    return users.find(user => user.username === username);
}

export function createUser(username: string,
                           password: string,
                           firstName: string,
                           lastName: string): User {
    if (getUserByUsername(username) !== undefined) {
        throw new UserInputError('The username is already taken!');
    }
    const newUser: User = {
        id: generateRandomId(),
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
    const user: User | undefined = getUserByUsername(username);
    if (user === undefined) {
        throw new UserInputError('Cannot find user with the provided username');
    }
    users.push(users.splice(users.indexOf(user), 1)[0]);
    return users.pop();
}

export function getTagByName(name: String): Tag | undefined {
    return tags.find(tag => tag.name === name);
}

export function createTag(name: string): Tag {
    if (getTagByName(name) !== undefined) {
        throw new UserInputError('Tag with the same name already exists!')
    }
    const newTag: Tag = {
        id: generateRandomId(),
        name,
    };
    tags.push(newTag);
    return newTag;
}

export function getAllTweets(): Tweet[] {
    return tweets;
}

export function createTweet(body: string,
                            tags: Tag[],
                            userId: String,): Tweet {
    const user: User | undefined = getUserByUsername(userId);
    if (user === undefined) {
        throw new UserInputError('Cannot find user with the provided username or the user does not exist');
    }
    const newTweet: Tweet = {
        id: generateRandomId(),
        date: new Date(),
        body,
        user,
        tags,
    };
    user.tweets.push(newTweet);
    tweets.push(newTweet);
    return newTweet;
}

function generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
