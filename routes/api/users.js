// Dependencies
const router = require("express").Router();
const User = require("../../models/User");
const passport = require("../../passport");

////////// MONGO DATABASE //////////

// GET method for finding a specific user
router.get(`/:id`, (req, res) => {
  User.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
});

// PUT method for finding a specific user and saving their game
router.put(`/:id`, (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
});

// Sign UP POST method (Posts to the users collection)
router.post(`/`, (req, res) => {
  console.log();
  console.log("--SIGN UP--");

  // Validation to check if username already exists
  User.findOne({ username: req.body.username })
    .then((data) => {
      if (data) {
        res.json({ error: `User "${username}" already exists!` });
      } else {
        User.create(req.body).then((data) => res.json(data));
      }
    })
    .catch((err) => res.status(422).json(err));
});

////////// PASSPORT //////////

// Checks if current session is logged in?
router.get(`/`, (req, res) => {
  console.log();
  console.log("--USER--");
  console.log(req.user);
  console.log();
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

// Sign IN POST method to store in the session
router.post(
  `/login`,
  (req, res, next) => {
    console.log();
    console.log("--SIGN IN--");
    console.log(req.body);
    console.log();
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log();
    console.log("-- CURRENTLY SIGNED IN--");
    console.log(req.user);
    console.log();
    res.send({ id: req.user._id, username: req.user.username });
  }
);

// Sign OUT POST method to call the passport logout function
router.post(`/logout`, (req, res) => {
  console.log();
  console.log("--SIGN OUT--");
  console.log(req.user);
  console.log();
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
