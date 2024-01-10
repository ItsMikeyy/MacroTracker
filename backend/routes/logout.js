const {Router} = require("express");
const passport = require("passport");
const router = Router();

router.get("/", (req, res, next) => {
    console.log("LOGOUT")
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('http://localhost:3000');
      });
})

module.exports = router;