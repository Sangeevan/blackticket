require("dotenv").config({path: '.env.local'})

module.exports = {
    env: 'local',
    port: process.env.PORT,
    apiDocsEnabled: process.env.API_DOCS_ENABLED
}
