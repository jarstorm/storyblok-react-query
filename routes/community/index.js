const express = require('express');
const {ALL_COMMUNITIES} = require("../../data/comunities");
const {simulateLatency} = require("../../config");


const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, ALL_COMMUNITIES)
});

router.post('/follow', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    // TODO
    console.log("Follow community")
    simulateLatency(res, {ok: true})
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');

    const data = ALL_COMMUNITIES.find((d) => d.id == id)

    simulateLatency(res, data)
});

module.exports = router;
