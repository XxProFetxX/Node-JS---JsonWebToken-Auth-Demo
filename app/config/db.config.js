module.exports = {
    HOST: "containers-us-west-101.railway.app",
    USER: "root",
    PASSWORD: "CsWRAmu45aKI3Qe6bdGI",
    DB: "railway",
    PORT: "6431",
    URL: "mysql://${{ MYSQLUSER }}:${{ MYSQLPASSWORD }}@${{ MYSQLHOST }}:${{ MYSQLPORT }}/${{ MYSQLDATABASE }}",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}