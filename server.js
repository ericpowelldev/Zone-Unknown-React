// Dependencies
const express = require(`express`);
const mongoose = require(`mongoose`);

// Require all routes
const routes = require("./routes");

// Set PORT
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public static folder
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes (Both API & view)
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/zu_db`, { useNewUrlParser: true });

// Server listen
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});

module.exports = app;