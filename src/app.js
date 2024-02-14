const express = require('express')
const app = express()
const config = require("config")

const apiRouters = require('./routes/apiRoutes')

env = config.get('env')
port = config.get('port')

app.use('/api', apiRouters)

app.listen(port, () => {
    console.log(`Black Ticket app is running on ${env} environment and listening on port ${port}`)
})
