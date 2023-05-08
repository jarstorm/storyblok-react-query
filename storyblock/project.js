const {STORYBLOK_SERVER_URL, STORYBLOK_TOKEN, STORYBLOK_BASIC_SERVER_URL} = require("../config");

const getStoryblockProjectDataByCategory = (category) => {
    let url = STORYBLOK_SERVER_URL + "&content_type=post";
    if (category !== "all") {
    url += `&filter_query[type][in]=${category}`
    }

    return new Promise((resolve) => {
        fetch(url).then(res => res.json()).then(d => resolve(d));
    });
}

const getStoryblockProjectDataById = (id) => {
    let url = `${STORYBLOK_BASIC_SERVER_URL}/${id}?token=${STORYBLOK_TOKEN}` ;

    return new Promise((resolve) => {
        fetch(url).then(res => res.json()).then(d => resolve(d));
    });
}

module.exports = {getStoryblockProjectDataByCategory, getStoryblockProjectDataById}