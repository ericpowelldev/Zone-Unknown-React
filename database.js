// Use Mongo DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zu_db', { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose.connection;