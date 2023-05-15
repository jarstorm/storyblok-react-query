const {ADMIN_REPORTS_DATA} = require("./data/admin-reports");
const STORYBLOK_TOKEN = "QPpeHjrb57ZtQMm9RdkBYQtt";

const TEST_USER_EMAIL = "test@emurgo.io"
const TEST_ADMIN_EMAIL = "admin@emurgo.io"

const getMockTimeout = () => {
    return Math.random() * 2000 // 0 to 2 seconds waiting
}

const simulateLatency = (res, data) => {
    setTimeout(() => res.send(data), getMockTimeout())
}

module.exports = {STORYBLOK_TOKEN, TEST_USER_EMAIL, TEST_ADMIN_EMAIL, simulateLatency }