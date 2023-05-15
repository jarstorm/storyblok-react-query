const express = require('express');
const {NOTIFICATION_DATA} = require("../../data/notification");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, NOTIFICATION_DATA)
});


module.exports = router;
