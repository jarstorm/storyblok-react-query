const MARKET_STATUS = {
    highlight: [
        {
            name: 'Cardano',
            imgSrc: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
            ticker: 'ADA',
            price: '0.39430',
            change: '3,84',
            changeType: 'up'
        },
        {
            name: 'COTI',
            imgSrc: 'https://assets.coingecko.com/coins/images/2962/large/Coti.png?1559653863',
            ticker: 'COTI',
            price: '0.07669',
            change: '9.49',
            changeType: 'down'
        },
        {
            name: 'COTI',
            imgSrc: 'https://assets.coingecko.com/coins/images/2962/large/Coti.png?1559653863',
            ticker: 'COTI',
            price: '0.07669',
            change: '9.49',
            changeType: 'down'
        }
    ],
    topGainer: [
        {
            name: 'Cardano',
            imgSrc: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
            ticker: 'ADA',
            price: '0.39430',
            change: '3,84',
            changeType: 'up'
        },
        {
            name: 'COTI',
            imgSrc: 'https://assets.coingecko.com/coins/images/2962/large/Coti.png?1559653863',
            ticker: 'COTI',
            price: '0.07669',
            change: '9.49',
            changeType: 'down'
        },
        {
            name: 'COTI',
            imgSrc: 'https://assets.coingecko.com/coins/images/2962/large/Coti.png?1559653863',
            ticker: 'COTI',
            price: '0.07669',
            change: '9.49',
            changeType: 'down'
        }
    ]
}

const ALL_TOKEN_DATA = [
    {
        name: 'Cardano',
        imgSrc: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
        ticker: 'ADA',
        price: '0.39430',
        change: '3,84',
        changeType: 'up',
        ath: '3.09',
        atl: '0.019',
        volume: '444,135,799',
        marketCap: '14,112,632,992'
    },
    {
        name: 'COTI',
        imgSrc: 'https://assets.coingecko.com/coins/images/2962/large/Coti.png?1559653863',
        ticker: 'COTI',
        price: '0.07669',
        change: '9.49',
        changeType: 'down',
        ath: '0.67',
        atl: '0.006',
        volume: '20,057,999',
        marketCap: '114,696,204'
    }
]

const CHART_DATA = {
    '1D': {labels: ['00:00', '12:00', '16:00', '23:59'], data: [410, 20, 90, 901]},
    '1W': {labels: ['Monday', 'Wednesday', 'Friday', 'Sunday'], data: [420, 20, 930, 90]},
    '1M': {labels: ['First', 'Second', 'Third', 'Fourth'], data: [40, 240, 90, 920]},
    '1Y': {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        data: [40, 240, 930, 90, 1, 100, 1000, 60, 45, 67, 870, 12]
    }
}

const TOKEN_DESCRIPTION =
    '<p>It is named after Ada Lovelace: a 19th-century mathematician who is recognized as the first computer programmer, ' +
    'and is the daughter of the poet Lord Byron.</p>' +
    '<p>Ada is a digital currency. Any user, located anywhere in the world, can use ada as a secure exchange of value – ' +
    'without requiring a third party to mediate the exchange. Every transaction is permanently, securely, and ' +
    'transparently recorded on the Cardano blockchain.</p>' +
    "<p>Every ada holder also holds a stake in the Cardano network. Ada stored in a wallet can be delegated to a stake pool to earn rewards – to participate in the successful running of the network – or pledged to a stake pool to increase the pool's likelihood of receiving rewards. In time, ada will also be usable for a variety of applications and services on the Cardano platform.\n" +
    '\n</p>'

const TOKEN_LINKS = {
    website: 'https://cardano.org/',
    whitepaper: 'https://why.cardano.org/en/introduction/motivation/'
};

const TOKEN_LIVE_DATA =
    '<p>The live Cardano price today is 0.40274 USD with a 24-hour trading volume of 444,135,799 USD. We update our ' +
    'ADA to USD price every 6 minutes. Cardano is up 3.84% in the last 24 hours. The current Market Cap ranking is #8, ' +
    'with a live market cap of 14,112,632,992 USD. It has a circulating supply of 35,045,000,000 ADA coins and a max. ' +
    'supply of 45,000,000,000 ADA coins.</p>'


const TOKEN_STATISTICS = [
    {name: '1D', high: 0.43, low: 0.4, returns: 3.45, returnsType: 'up'},
    {name: '1W', high: 1.43, low: 0.35, returns: 13.45, returnsType: 'down'},
    {name: '1M', high: 2.43, low: 0.25, returns: 23.45, returnsType: 'up'},
    {name: '1Y', high: 3.43, low: 0.15, returns: 33.45, returnsType: 'down'}
]

module.exports = {MARKET_STATUS, ALL_TOKEN_DATA, CHART_DATA, TOKEN_DESCRIPTION, TOKEN_LINKS, TOKEN_LIVE_DATA, TOKEN_STATISTICS}