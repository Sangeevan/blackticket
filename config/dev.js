require("dotenv").config({path:'.env.dev'})

module.exports = {
    env:'dev',
    port:process.env.PORT
}
