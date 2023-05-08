const express = require('express');
const {completeProjectsData} = require("../../module/project/completeData");
const {getStoryblockProjectDataById, getStoryblockProjectDataByCategory} = require("../../storyblock/project");

const router = express.Router();

router.get('/', function(req, res, next) {

    const {category} = req.query
    res.setHeader('Content-Type', 'application/json');

    getStoryblockProjectDataByCategory(category).then(sb =>completeProjectsData(sb.stories)).then(d => res.send(d))
});

router.get('/:id', function(req, res, next) {

    const {id} = req.params;

    res.setHeader('Content-Type', 'application/json');

    getStoryblockProjectDataById(id).then(sb =>completeProjectsData([sb.story])).then(d => res.send(d[0]))
});


module.exports = router;
