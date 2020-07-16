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

interface Tweet {
    id: String,
    body: String,
    date: Date,
}
