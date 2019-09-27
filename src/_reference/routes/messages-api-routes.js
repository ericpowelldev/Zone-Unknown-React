// dependencies
var db = require("../models");
// routes
module.exports = function(app){

    //grabs all messages to display to chat room
    app.get("/api/messages", function(req, res){
        db.Message.findAll({})
        .then(function(response){
            res.json(response);
        });
    });
    
    //posts and saves all messages for chat room
    app.post("/api/messages", function(req, res){
        console.log(req.body);
        db.Message.create({
            message: req.body.message         
        }).then(function(response){
            res.json(response);
        });
    });
};