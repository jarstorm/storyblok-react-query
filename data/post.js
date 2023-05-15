const POST_DATA = [
    {
        id: 1,
        title: 'Post title',
        imgSrc: 'https://picsum.photos/200/300',
        user: {id: 1, name: 'Jack', imgSrc: 'https://eu.ui-avatars.com/api/?name=Jack&size=50'},
        date: new Date('2023-04-10'),
        upvoteCount: 10,
        comment: [{user: {id: 1, name: 'User name'}, text: 'Comment text'}],
        upvoted: true,
        community: {id: 3, name: 'DeFi'},
        owner: 1,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
        community: {id: 3, name: 'DeFi'},
        owner: 2,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
        community: {id: 1, name: 'Cardano Spot'},
        owner: 2,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
        community: {id: 1, name: 'Cardano Spot'},
        owner: 1,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
        community: {id: 3, name: 'DeFi'},
        owner: 2,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
        community: {id: 1, name: 'Cardano Spot'},
        owner: 1,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const  POST_REPORT_ITEMS = [
    {
        value: 1,
        text: 'Nudity'
    },
    {
        value: 2,
        text: 'Spam'
    },
    {
        value: 3,
        text: 'Unauthorized'
    },
    {
        value: 4,
        text: 'Violence'
    },
    {
        value: 5,
        text: 'Terrorism'
    },
    {
        value: 6,
        text: 'Hate'
    },
    {
        value: 7,
        text: 'False'
    },
    {
        value: 8,
        text: 'Other'
    }
]

module.exports = {POST_DATA, POST_REPORT_ITEMS}