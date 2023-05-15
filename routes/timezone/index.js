const express = require('express');
const {TIME_ZONE_DATA} = require("../../data/timezone");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, TIME_ZONE_DATA)
});


module.exports = router;
