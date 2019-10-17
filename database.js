// Use Mongo DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zu_db', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://user1:password1@ds235378.mlab.com:35378/heroku_8zlt8b4d', { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose.connection;