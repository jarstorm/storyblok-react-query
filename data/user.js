const {TEST_USER_EMAIL, TEST_ADMIN_EMAIL} = require("../config");
const USER_DATA = {
    id: '1',
    name: 'usernametest',
    postCount: 10,
    followersCount: 11,
    followingCount: 22,
    imgSrc:
        'https://cardanospot.io/sites/default/files/styles/thumbnail/public/user-pictures/user_picture_default.png?itok=fp0Z4vtZ'
}

const USER_EVENTS_SAVED = {
    dates: ['2023/05/01', '2023/05/10'],
    items: [
        {
            url: 'https://blockchaineconomy.istanbul/en',
            name: 'Blockchain event 1',
            where: 'Istanbul, Turkey',
            dates: '08 - 11 May 2023'
        }
    ]
}

const USER_LOGIN_USER = {
    user: {
        email: TEST_USER_EMAIL,
        roles: ['ROLE_USER'],
        id: 1,
        avatar: 'https://cardanospot.io/sites/default/files/user-pictures/user_picture_default.png'
    }
};


const USER_LOGIN_ADMIN = {
    user: {
        email: TEST_ADMIN_EMAIL,
        id: 2,
        roles: ['ROLE_USER', 'ROLE_ADMIN'],
        avatar: 'https://cardanospot.io/sites/default/files/user-pictures/user_picture_default.png'
    }
}

const USER_POST_DATA =  [
    {
        id: 1,
        title: 'Post title',
        imgSrc: 'https://picsum.photos/200/300',
        user: {id: 1, name: 'Jack', imgSrc: 'https://eu.ui-avatars.com/api/?name=Jack&size=50'},
        date: new Date('2023-04-10'),
        upvoteCount: 10,
        comment: [{user: {id: 1, name: 'User name'}, text: 'Comment text'}],
        upvoted: true,
        community: {id: 3, name: 'DeFi'}
    },
    {
        id: 2,
        title: 'Post title 2',
        imgSrc: 'https://picsum.photos/200/300',
        user: {id: 2, name: 'Peter Jackson', imgSrc: 'https://eu.ui-avatars.com/api/?name=Perter+Jack&size=50'},
        date: new Date('2022-10-10'),
        upvoteCount: 0,
        comment: [{user: {id: 1, name: 'User name'}, text: 'Comment text 2'}],
        upvoted: false,
        community: {id: 3, name: 'DeFi'}
    },
    {
        id: 3,
        title: 'Post title 2',
        imgSrc: 'https://picsum.photos/200/300',
        user: {id: 3, name: 'Michael Jordan', imgSrc: 'https://eu.ui-avatars.com/api/?name=Michael+Jordan&size=50'},
        date: new Date('2023-01-10'),
        upvoteCount: 30,
        comment: [{user: {id: 1, name: 'User name'}, text: 'Comment text 2'}],
        upvoted: true,
        community: {id: 1, name: 'Cardano Spot'}
    },
    {
        id: 4,
        title: 'Post title 2',
        imgSrc: 'https://picsum.photos/200/300',
        user: {id: 4, name: 'Tim', imgSrc: 'https://eu.ui-avatars.com/api/?name=Tim&size=50'},
        date: new Date('2023-03-10'),
        upvoteCount: 12,
        comment: [{user: {id: 1, name: 'User name'}, text: 'Comment text 2'}],
        upvoted: false,
        community: {id: 1, name: 'Cardano Spot'}
    },
    {
        id: 5,
        title: 'Post title 2',
        imgSrc: 'https://picsum.photos/200/300',
        user: {id: 5, name: 'Blackhead', imgSrc: 'https://eu.ui-avatars.com/api/?name=Blackhead&size=50'},
        date: new Date('2023-02-09'),
        upvoteCount: 7,
        comment: [{user: {id: 1, name: 'User name'}, text: 'Comment text 2'}],
        upvoted: true,
        community: {id: 3, name: 'DeFi'}
    },
    {
        id: 6,
        title: 'Post title 2',
        imgSrc: 'https://picsum.photos/200/300',
        user: {id: 6, name: 'Mathias', imgSrc: 'https://eu.ui-avatars.com/api/?name=Mathias&size=50'},
        date: new Date('2023-01-10'),
        upvoteCount: 5,
        comment: [{user: {id: 1, name: 'User name'}, text: 'Comment text 2'}],
        upvoted: true,
        community: {id: 1, name: 'Cardano Spot'}
    }
]

module.exports = {USER_DATA,USER_EVENTS_SAVED, USER_LOGIN_USER, USER_LOGIN_ADMIN, USER_POST_DATA}