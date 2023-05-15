const {getStoryBlockInstance} = require("./init");
const getStoryblockProjectDataByCategory = (category) => {

    let params = { version: "draft", content_type:"post" };
    if (category !== "all") {
        params["type"] = {is: category};
    }

    return new Promise((resolve) => {
        getStoryBlockInstance().getAll('cdn/stories', params ).then(d => resolve(d))
    });
}

const getStoryblockProjectDataById = (id) => {

    return new Promise((resolve, reject) => {
        getStoryBlockInstance().get('cdn/stories/' + id,  ).then(d => {
            if (d && d.data) {
                resolve(d.data.story)
            }else {
                reject()
            }
        })
    });
}

module.exports = {getStoryblockProjectDataByCategory, getStoryblockProjectDataById}