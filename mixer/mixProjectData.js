
const mixProjectData = (storyblockProjectData, dbProjectsData) => {
    return storyblockProjectData.map(storyblockProject => {
        const dbProject = dbProjectsData.find(p => p.id === storyblockProject.id);
        if (!dbProject) {
            // TODO we should do something here, maybe create a new one
        }
        return generateFinalObject(storyblockProject, dbProject)
    });
}


const generateFinalObject = (storyblockProject, dbProject) => {
    return {id: storyblockProject.id, isReleased: dbProject?.isReleased, likes: dbProject?.likes,
        name: storyblockProject.content.name, category: storyblockProject.content.type,
        description: storyblockProject.content.description, imgSrc:storyblockProject.content.image.filename };
}
module.exports = {mixProjectData}