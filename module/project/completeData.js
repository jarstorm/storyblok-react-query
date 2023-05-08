const {getProjectsData} = require("../../db/project");
const {mixProjectData} = require("../../mixer/mixProjectData");
const completeProjectsData = (storyblockProjectsData) => {
    return new Promise((resolve) => {
        if (!storyblockProjectsData || storyblockProjectsData.length === 0) {
            resolve([]);
        }
        const ids = storyblockProjectsData.map(p => p.id);
        const dbProjectsData = getProjectsData(ids);
        resolve(mixProjectData(storyblockProjectsData, dbProjectsData))
    });
}

module.exports = {completeProjectsData}