const {Router} = require("express");
const passport = require("passport");
const userModel = require("../models/user");



const router = Router();


router.post("/", passport.authenticate('local', { failureRedirect: 'http://localhost:3000/login' }), (req, res) => {
    console.log("YES")
    res.redirect('http://localhost:3000');
})
module.exports = router;