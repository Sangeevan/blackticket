require("dotenv").config({path:'.env.local'})

module.exports = {
    env:'local',
    port:process.env.PORT
}
