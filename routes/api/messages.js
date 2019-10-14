// Dependencies
const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/messages"
router.route("/")
    .get(function (req, res) {
        db.Message
            .find(req.query)
            .sort({ _id: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
    .post(function (req, res) {
        db.Message
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });

// Matches with "/api/messages/:id"
router.route("/:id")
    .get(function (req, res) {
        db.Message
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
    .put(function (req, res) {
        db.Message
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
    .delete(function (req, res) {
        db.Message
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });

module.exports = router;