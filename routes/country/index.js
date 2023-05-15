const express = require('express');
const {ALL_COUNTRIES} = require("../../data/countries");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, ALL_COUNTRIES)
});


module.exports = router;
