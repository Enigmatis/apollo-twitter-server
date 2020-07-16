interface User {
    id: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    name?: string,
    avatarUrl?: string,
    tweets: Tweet[],
}

interface Tweet {
    id: string,
    body: string,
    date: Date,
    user: User,
}
