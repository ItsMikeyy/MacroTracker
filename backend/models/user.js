const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const passport = require("passport")
const Schema = mongoose.Schema


const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    age: Number,
    gender: String,
    height: Number,
    weight: Number,
    activity: Number,
    goal: Number,
    goalCalorie: Number,
    goalProtein: Number,
    goalCarb: Number,
    goalFat: Number

  });

userSchema.plugin(passportLocalMongoose);

const userModel = new mongoose.model("user", userSchema)
passport.use(userModel.createStrategy())
passport.serializeUser(userModel.serializeUser())
passport.deserializeUser(userModel.deserializeUser())
module.exports = userModel;