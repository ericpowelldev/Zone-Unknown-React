// Dependencies
const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/messages"
router.route("/")
    .get(function(req, res) {
        db.Messages
            .find(req.query)
            .sort({_id:1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
    .post(function(req, res){
        db.Messages
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });

module.exports = router;