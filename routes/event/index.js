const express = require('express');
const {ALL_EVENTS} = require("../../data/events");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, ALL_EVENTS)
});


module.exports = router;
