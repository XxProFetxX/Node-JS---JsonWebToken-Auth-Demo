const APP_CONFIG =  require("./config.js")

module.exports = {
    HOST: 'containers-us-west-45.railway.app',
    USER: 'root',
    PASSWORD: '3Xhqq2qrBFDipYIg3EeN',
    PORT: '6543',
    DB: 'railway',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}