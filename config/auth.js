const passport = require('passport')
const passportService = require('./passportService')(passport);

const userAuth = passport.authenticate('jwt', { session: false })

module.exports = {
  userAuth
}