const {Router} = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/user");
const bcrypt = require("bcrypt")
const router = Router();
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");
mongoose.connect('mongodb://127.0.0.1:27017/nutrition');

router.post("/", async (req, res) => {
    let formData = req.body
    formData = calcMacro(formData);
    const newUser = new userModel({
        firstname: formData.firstname,
        lastname: formData.lastname,
        username: formData.username,
        age: formData.age,
        gender: formData.gender,
        height: formData.height,
        weight: formData.weight,
        activity: formData.activity,
        goal: formData.goal,
        goalCalorie: formData.goalCalorie,
        goalProtein: formData.goalProtein,
        goalCarb: formData.goalCarb,
        goalFat: formData.goalFat
    })


    userModel.register(newUser, formData.password, (err, user) => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("http://localhost:3000")
            })
        }
    })
})

const calcMacro = (data) => {
    //BMR
    const bmr = Math.round(66 + (6.23 * data.weight) + (12.7 * data.height) - (6.8 * data.age))
    console.log("BMR " + bmr.toString())
    //Activity level
    const activityLevel = Math.round((bmr * data.activity) + data.goal)
    console.log("activityLevel " + activityLevel.toString())
    data.goalCalorie = activityLevel
    //Protein
    data.goalProtein =  Math.round((activityLevel * 0.25) / 4)
    //Carb
    data.goalCarb = Math.round((activityLevel * 0.50) / 4)
    //Fat
    data.goalFat =  Math.round((activityLevel * 0.25) / 9)
    return data 
}

module.exports = router;