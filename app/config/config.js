const APP_CONFIG = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'admin',
    DB_NAME: process.env.DB_NAME || 'testdb',
    DB_PORT: process.env.DB_PORT || 3306
}

module.exports = APP_CONFIG