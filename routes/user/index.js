const express = require('express');
const {USER_DATA, USER_EVENTS_SAVED, USER_LOGIN_USER, USER_LOGIN_ADMIN, USER_POST_DATA} = require("../../data/user");
const {TEST_USER_EMAIL, TEST_ADMIN_EMAIL} = require("../../config");

const router = express.Router();

router.get('/:id', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, USER_DATA)
});

router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    console.log("Delete post with id: " + id)
    simulateLatency(res, {ok: true})
});

router.get('/:id/events-saved', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, USER_EVENTS_SAVED)
});

router.post('/forgot-password', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("FORGOT password")
    simulateLatency(res, {ok: true})
});

router.post('/login', function(req, res, next) {
    const {email, password} = req.body;
    res.setHeader('Content-Type', 'application/json');
    if (TEST_USER_EMAIL === email) {
        simulateLatency(res, USER_LOGIN_USER)
    } else if (TEST_ADMIN_EMAIL === email) {
        simulateLatency(res, USER_LOGIN_ADMIN)
    } else {
        res
            .status(400)
            .json({ message: "Cannot find user and password." })
    }
});

router.get('/:id/post', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    simulateLatency(res, USER_POST_DATA)
});

router.post('/register', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Register user")
    simulateLatency(res, {ok: true})
});

router.post('/:id/reset-password', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Reset password")
    simulateLatency(res, {ok: true})
});

router.post('/:id/set-communities', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Set communities")
    simulateLatency(res, {ok: true})
});

router.post('/:id/set-password', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Set password")
    simulateLatency(res, {ok: true})
});

router.post('/:id/set-role', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Set role")
    simulateLatency(res, {ok: true})
});

router.post('/:id/set-username', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Set username")
    simulateLatency(res, {ok: true})
});

router.post('/:id/update-password', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Update password")
    simulateLatency(res, {ok: true})
});

router.post('/:id/update-type', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Update type")
    simulateLatency(res, {ok: true})
});

router.post('/:id/avatar', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Update profile avatar")
    simulateLatency(res, {ok: true})
});


module.exports = router;
