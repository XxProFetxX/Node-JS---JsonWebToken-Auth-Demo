const APP_CONFIG = require("./app/config/config.js")
const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./app/models")
const Role = db.role

var corsOptions = {
    origin: "http://localhost:3000"
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.json({ message: "Welcome to breydi application." })
})

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

//db.sequelize.sync();

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.listen(APP_CONFIG.PORT, () => {
    console.log(`Server is running on APP_CONFIG.PORT ${APP_CONFIG.PORT}.`)
})