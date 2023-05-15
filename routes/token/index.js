const express = require('express');
const {MARKET_STATUS, ALL_TOKEN_DATA, CHART_DATA, TOKEN_DESCRIPTION, TOKEN_LINKS, TOKEN_LIVE_DATA, TOKEN_STATISTICS} = require("../../data/token");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, ALL_TOKEN_DATA)
});

router.get('/market-status', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, MARKET_STATUS)
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    const data = ALL_TOKEN_DATA.find((coin) => coin.ticker == id)
    simulateLatency(res, data)
});

router.get('/:id/chart-data', function(req, res, next) {
    const id = req.params.id;
    const  {period} = req.query;
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, CHART_DATA[period])
});

router.get('/:id/description', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, TOKEN_DESCRIPTION)
});

router.get('/:id/links', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, TOKEN_LINKS)
});

router.get('/:id/live-data', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, TOKEN_LIVE_DATA)
});

router.get('/:id/statistics', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, TOKEN_STATISTICS)
});


module.exports = router;
