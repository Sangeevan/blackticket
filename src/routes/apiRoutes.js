const express = require('express')
const apiRouter = express.Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./../../swagger.json')
const config = require("config")

const userRouter = require('./userRoutes')

apiDocsEnabled = config.get('apiDocsEnabled')
if (apiDocsEnabled === 'True') {
    apiRouter.use('/docs', swaggerUi.serve)
    apiRouter.get('/docs', swaggerUi.setup(swaggerDocument))
}

apiRouter.use('/users', userRouter)

module.exports = apiRouter