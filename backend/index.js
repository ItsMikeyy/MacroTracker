const express = require("express");
const bodyParser = require('body-parser')
const session = require("express-session")
const cors = require("cors");
const passport = require("passport")
const flash = require('connect-flash');


const nutritionRoute = require("./routes/nutrition")
const signupRoute = require("./routes/signup")
const loginRoute = require("./routes/login")
const logoutRoute = require("./routes/logout")


const app = express()

app.use(express.json())
app.use(session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use("/signup", signupRoute)
app.use("/nutrition", nutritionRoute)
app.use("/login", loginRoute)
app.use("/logout", logoutRoute)

app.listen(3001, () => {
    console.log("server started")
})


