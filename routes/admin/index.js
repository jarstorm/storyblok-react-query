const express = require('express');
const {ADMIN_REPORTS_DATA} = require("../../data/admin-reports");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/reports', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, ADMIN_REPORTS_DATA)
});


module.exports = router;
