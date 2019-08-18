interface Tweet {
    id: String,
    body: String,
    date: Date,
    user: User,
    tags: Tag[],
}

interface User {
    id: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    name?: String,
    avatarUrl?: String,
    tweets: Tweet[],
}

interface Tag {
    id: String,
    name: String,
}
