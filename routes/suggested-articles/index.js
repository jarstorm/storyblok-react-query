const express = require('express');
const {SUGGESTED_ARTICLES} = require("../../data/suggested-articles");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, SUGGESTED_ARTICLES)
});


module.exports = router;
