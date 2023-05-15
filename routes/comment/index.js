const express = require('express');
const {COMMENT_DATA} = require("../../data/coments");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, COMMENT_DATA)
});

router.delete('/delete', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("comment/delete TODO")
    simulateLatency(res, {ok: true})
});



module.exports = router;
