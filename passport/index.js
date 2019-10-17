const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/User')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((username, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(username) // the whole raw user object!
	console.log('---------')
	done(null, { _id: username._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findOne(
		{ _id: id },
		'username',
		(err, username) => {
			console.log('*** Deserialize user, user:')
			console.log(username)
			console.log('--------------')
			done(null, username)
		}
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport