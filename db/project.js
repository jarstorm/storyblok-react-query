const getProjectsData = (projectIds) => {
    return projectData.filter(p => projectIds.includes(p.id));
}

const projectData = [
    {id: 276759935, likes:1, isReleased: true},
    {id: 277964181, likes: 20, isReleased: false},
    {id: 276759922, likes: 0, isReleased: true},
    {id:304165835, likes: 1, isReleased: true}
];

module.exports = {getProjectsData}