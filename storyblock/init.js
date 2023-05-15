// 1. Import the Storyblok client
const StoryblokClient = require('storyblok-js-client');
const {STORYBLOK_TOKEN} = require("../config");

let storyBlockInstance = null;

const getStoryBlockInstance = () => {
    if (storyBlockInstance === null) {
        storyBlockInstance = new StoryblokClient({
            accessToken: STORYBLOK_TOKEN
        });
    }
    return storyBlockInstance;
}

module.exports = {getStoryBlockInstance}