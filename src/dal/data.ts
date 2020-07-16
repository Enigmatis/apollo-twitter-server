export const users: User[] = [
    {
        id: '4400d81a-6585-4b8f-ab71-fdac63f90006',
        firstName: 'Foo',
        lastName: 'Bar',
        username: 'aaa',
        password: '111',
        avatarUrl: '',
        tweets: [],
    },
    {
        id: '68c887cc-a454-44a4-85fd-d27c4b375fb4',
        firstName: 'Hello',
        lastName: 'World',
        username: 'bbb',
        password: '222',
        avatarUrl: '',
        tweets: [],
    },
    {
        id: 'c199d4ae-7984-46c0-8660-ab497e18198a',
        firstName: 'Boom',
        lastName: 'Explosion',
        username: 'ccc',
        password: '333',
        avatarUrl: '',
        tweets: [],
    },
];

export const tweets: Tweet[] = [
    {
        id: '65fad12d-3234-4075-a148-2a9a0ddae7a0',
        body: 'have a good day!',
        date: new Date('2020-07-16 12:09:36'),
        user: users[0],
    },
    {
        id: '946fc882-ff3a-4018-9fd4-3551df3cf2dd',
        body: 'this is strange...',
        date: new Date('2020-07-15 17:45:19'),
        user: users[1],
    },
    {
        id: '0b0e956a-c75d-426e-a036-dfea587efed7',
        body: 'no pain, no gain',
        date: new Date('2020-07-14 20:11:54'),
        user: users[2],
    }
];

users[0].tweets.push(tweets[0]);
users[1].tweets.push(tweets[1]);
users[2].tweets.push(tweets[2]);
