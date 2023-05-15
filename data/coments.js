const COMMENT_DATA = [
    {
        id: '1',
        userName: 'testUser',
        text: 'Text of the comment',
        date: new Date(),
        userId: '1234',
        likes: 3,
        replies: 456,
        imgSrc: 'https://eu.ui-avatars.com/api/?name=Jack&size=50'
    },
    {
        id: '2',
        userName: 'otherUser',
        text: 'This is the text of a different comment',
        date: new Date(),
        userId: '334',
        likes: 123,
        replies: 23,
        imgSrc: 'https://eu.ui-avatars.com/api/?name=Other&size=50'
    },
    {
        id: '3',
        userName: 'newUser',
        text: 'no text here to display',
        date: new Date(),
        userId: '666',
        likes: 5,
        replies: 22,
        imgSrc: 'https://eu.ui-avatars.com/api/?name=New&size=50'
    }
]

module.exports = {COMMENT_DATA}