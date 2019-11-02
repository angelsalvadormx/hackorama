const User = require("../model/userModel");
const passport = require("passport");

module.exports = {
  register: (req, res, next) => {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.email,
			phone: req.body.phone,
      profileImage: req.body.profileImage
    });

    User.register(newUser, req.body.password, (err, user) => {
      if (err) {
        res
          .status(403)
          .json({ message: err.message })
          .end();
      }
      passport.authenticate("local")(req, res, () => {
        req.session.save(err => {k
          if (err) {
            return next(err);
          }
          res.redirect("/v1/findog/post");
        });
      });
    });
  },

  login: (req, res, next) => {
		console.log('dfgdfg')
    req.session.save(err => {
      if (err) {
        return next(err);
      }
      res.redirect("/v1/findog/post");
    });
  },

  logout: (req, res, next) => {
    req.logout();
    req.session.save(err => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  }
};
