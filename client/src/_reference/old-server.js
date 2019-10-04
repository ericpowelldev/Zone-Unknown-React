require("dotenv").config();

//Server
var express = require('express');
var app = express();
var socket = require('http').Server(app);
var io = require('socket.io')(socket);

//Dependencies
// var fs = require('fs'); <---may still need currently dont atm
var path = require("path");
var db = require('./models');
var exphbs = require("express-handlebars");

//Port Variable
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/messages-api-routes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  socket.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
//Connection to socket-io and sends message
io.on("connection", function (socket) {
  socket.on("send message", function (sent_msg, chatUser, callback) {
      sent_msg = "  [ " +chatUser + " ] : " + sent_msg;
      io.sockets.emit("update messages", sent_msg);
      callback();
  });
});

// //Gets current date for socket-io
// function getCurrentDate() {
//   var currentDate = new Date();
//   var day = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
//   var month = ((currentDate.getMonth() + 1) < 10 ? '0' : '') + (currentDate.getMonth() + 1);
//   var year = currentDate.getFullYear();
//   var hour = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
//   var minute = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
//   var second = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
//   return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
// }

module.exports = app;
