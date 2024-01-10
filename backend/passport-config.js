const LocalStrategy = require("passport-local").Strategy
const bcyrpt = require("bcrypt")


function initialize(passport, getUserByEmail, getUserById) {

    const authenticateUser = async (email, password, done) => {
        const user = await getUserByEmail(email)
        if (user == null) {
            return done(null, false, {message: "No user with that email"})
        }

        try {
            if (await bcyrpt.compare(password, user.password)) {
                return done(null, user)
            }
            else {
                return done(null, false, {message: "password incorrect"})
            }
        }
        catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: "email"}, authenticateUser))
    passport.serializeUser((user, done) => {
        console.log(user._id)
        done(null, user._id)
    })
    passport.deserializeUser((id, done) => {
        done(null, getUserById(id))
    })
}

module.exports = initialize;