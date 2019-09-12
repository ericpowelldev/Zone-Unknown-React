var db = require("../models");
// var path = require('path');

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  // Load game page
  app.get("/game", function (req, res) {
    res.render("game");
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });

  //sends html for socket to server
  //  app.get("/socket-io", function (req, res) {
  //     res.sendFile(path.join(__dirname, '../public', 'socket-io.html'));
  //   });
};
