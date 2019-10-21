// Dependencies
const express = require(`express`);
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');

// Initialize Express
const app = express();

// Socket.io Server
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Require all routes
const routes = require("./routes");

// Set PORT
const PORT = process.env.PORT || 8080;

// Parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://user1:password1@ds235378.mlab.com:35378/heroku_8zlt8b4d' || 'mongodb://localhost:27017/zu_db', { useUnifiedTopology: true, useNewUrlParser: true });

// Sessions
app.use(
	session({
		secret: 'lucky-charms', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

//Socket Connections
io.on('connection', (client) => {
	console.log(`CLIENT ID SOCKET.IO: ${client.id}`);
	// interval timer can be removed

	client.on('SEND_MESSAGE', (data) => {
		console.log("--------------------------------")
		console.log("sent by client server side: ", data)
		client.emit('RECEIVE_MESSAGE', data);
	})

	client.on('error', function (err) {
		console.log('received error from client:', client.id)
		console.log(err)
	})
});

// Public static folder
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add API routes
app.use(routes);


// Server listen
server.listen(PORT, function () {
    console.log(`\n---------- Listening on http://localhost:${PORT} ----------\n`);
});

module.exports = app;