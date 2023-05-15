const express = require('express');
const {EXPLORE_EDITOR_DATA, EXPLORE_EVENT_DATA, EXPLORE_INFLUENCER_DATA, EXPLORE_LATEST_NEWS, EXPLORE_ALL_PROJECTS,
    EXPLORE_COIN_DATA, EXPLORE_VIDEO_DATA
} = require("../../data/explore");
const {simulateLatency} = require("../../config");

const router = express.Router();

router.get('/editor', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, EXPLORE_EDITOR_DATA)
});

router.get('/event', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, EXPLORE_EVENT_DATA)
});

router.get('/influencer', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, EXPLORE_INFLUENCER_DATA)
});

router.get('/latest-news', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, EXPLORE_LATEST_NEWS)
});

router.get('/project', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, EXPLORE_ALL_PROJECTS)
});

router.get('/token', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, EXPLORE_COIN_DATA)
});

router.get('/video', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, EXPLORE_VIDEO_DATA)
});

module.exports = router;
