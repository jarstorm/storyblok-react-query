const express = require('express');
const {ALL_SEARCH_DATA} = require("../../data/search");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    const  {type, filter} = req.query;
    res.setHeader('Content-Type', 'application/json');
    let data =ALL_SEARCH_DATA[type];
    if (filter) {
        data = data.filter((d) => d.description.toUpperCase().includes(filter.toUpperCase()))
    }
    simulateLatency(res, data)
});


module.exports = router;
