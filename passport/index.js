const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../models/User');

// Called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('serializeUser()');
	console.log(user); // the whole raw user object!
	console.log('---------');
	done(null, { _id: user._id });
})

// User object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('deserializeUser()');
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('DESERIALIZE, user:');
			console.log(user);
			console.log('--------------');
			done(null, user);
		}
	)
})

// Use Strategies 
passport.use(LocalStrategy);

module.exports = passport;