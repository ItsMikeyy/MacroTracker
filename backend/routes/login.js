const {Router} = require("express");
const passport = require("passport");
const userModel = require("../models/user");



const router = Router();

// router.post("/", (req,res,next) => {
//     passport.authenticate('local', function(err, user, info, status) {
//         console.log(user)
//         if (err) { return next(err) }
//         if (!user) { 
//             console.log("No user")
//             return res.sendStatus(401) }
//         res.redirect('http://localhost:3000');
//       })(req, res, next);
// })

router.post("/", passport.authenticate('local', { failureRedirect: 'http://localhost:3000/login'}), (req, res) => {
    console.log("YES")
    res.redirect('http://localhost:3000');
})
module.exports = router;