// Users model
var db = require("../models");

// User routes
module.exports = function (app) {
    app.get("/api/users", function (req, res) {
        db.Users.findAll({}).then(function (obj) {
            res.json(obj);
            console.log("\n\nFIND ALL USERS:\n\n" + JSON.stringify(req.body) + "\n\n");
        });
    });

    app.get("/api/users/:username", function (req, res) {
        db.Users.findOne({
            where: {
                username: req.params.username
            }
        }).then(function (obj) {
            res.json(obj);
            console.log("\n\nFIND USER:\n\n" + JSON.stringify(req.params.username) + "\n\n");
        });
    });

    app.post("/api/users", function (req, res) {
        db.Users.create({
            username: req.body.username,
            password: req.body.password,
            save: req.body.save
        }).then(function (obj) {
            res.json(obj);
            console.log("\n\nADDED NEW USER:\n\n" + JSON.stringify(req.body) + "\n\n");
        });
    });

    app.put("/api/users", function (req, res) {
        db.Users.update(req.body, {
            where: {
                username: req.body.username
            }
        }).then(function (obj) {
            res.json(obj);
            console.log("\n\nGAME SAVED FOR USER:\n\n" + JSON.stringify(req.body) + "\n\n");
        });
    });

    app.delete("/api/users/:username", function (req, res) {
        db.Users.destroy({
            where: {
                username: req.params.username
            }
        }).then(function (obj) {
            res.json(obj);
            console.log("\n\nDELETED USER:\n\n" + JSON.stringify(req.params.username) + "\n\n");
        });
    });
}