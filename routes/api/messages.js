// Dependencies
const router = require("express").Router();
const Message = require("../../models/Message");

// Matches with "/api/messages"
router.route("/")
    .get(function(req, res) {
        Message
            .find(req.query)
            .sort({_id:1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
    .post(function(req, res){
        Message
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });

module.exports = router;