// Dependencies
const router = require("express").Router();
const db = require("../../models");
const passport = require('../../passport')


// Matches with "/api/users"
router.route("/")
    .get(function (req, res) {
        db.User
            .find(req.query)
            .sort({ _id: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

router.route('/')
    .post(function (req, res) {
        console.log('user signup');
    
        const { username, password } = req.body
        // ADD VALIDATION
        db.User
            .findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const newUser = new db.User({
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }
        })
    })

// Matches with "/api/login" logins in the user
router.route("/login")
    .post(function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
        passport.authenticate('local'),
        (req, res) => {
            console.log('logged in', req.user);
            var userInfo = {
                username: req.user.username
            };
            res.send(userInfo);
        });

//Checks if current session login
router.route("/")
    .get(function (req, res, next) {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    });

//Logs out user from current session
router.route('/logout')
    .post(function (req, res) {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    });

// Matches with "/api/users/:id"
router.route("/:username")
    .get(function (req, res) {
        db.User
            .findOne(req.params.username)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
    .put(function (req, res) {
        db.User
            .findOneAndUpdate({ username: req.params.username }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
// .delete(function (req, res) {
//     db.User
//         .findById({ _id: req.params.id })
//         .then(dbModel => dbModel.remove())
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// });

module.exports = router;