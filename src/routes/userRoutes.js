const express = require('express')
const userRouter = express.Router()

userRouter.route('/all-users').get((req, res) => {
    res.send('All Black Ticket users')
})

userRouter.route('/:userId').get((req, res) => {
    res.send('Black Ticket user')
})

module.exports = userRouter