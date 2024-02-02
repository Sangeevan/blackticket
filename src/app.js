const express = require('express')
const app = express()
const config = require("config")

app.get('/', (req,res) => {
    res.send('Welcome to Black Ticket')
})

env = config.get('env')
port = config.get('port')

app.listen(port, () => {
    console.log(`Black Ticket app is running on ${env} environment and listening on port ${port}`)
})
