const APP_CONFIG =  require("./config.js")

module.exports = {
    HOST: APP_CONFIG.DB_HOST,
    USER: APP_CONFIG.DB_USER,
    PASSWORD: APP_CONFIG.DB_PASSWORD,
    PORT: APP_CONFIG.DB_PORT,
    DB: APP_CONFIG.DB_NAME,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}