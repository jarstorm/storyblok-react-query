const express = require('express');
const {NEWS_DATA} = require("../../data/news");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, NEWS_DATA)
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');

    const data = NEWS_DATA.find((news) => news.id == id)

    simulateLatency(res, data)
});

module.exports = router;
