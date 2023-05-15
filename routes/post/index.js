const express = require('express');
const {POST_DATA, POST_REPORT_ITEMS} = require("../../data/post");
const {NEWS_DATA} = require("../../data/news");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, POST_DATA)
});

router.get('/report-items', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, POST_REPORT_ITEMS)
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    const data = POST_DATA.find((post) => post.id == id)
    simulateLatency(res, data)
});

router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    // TODO do something here
    res.setHeader('Content-Type', 'application/json');
    console.log("post/delete with id: " + id)
    simulateLatency(res, {ok: true})
});

module.exports = router;
