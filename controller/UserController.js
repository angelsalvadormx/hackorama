const User = require('../model/userModel');

module.exports = {

  getAll: (req, res) => {
    User.find(req.query, (err, users) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(users)
        .end();
    });
  },

  getById: (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(user)
        .end();
    });
  },

	save: (req, res) => {
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			username: req.body.email,
			phone: req.body.email,
			password: req.body.password,
			profileImage: req.body.profileImage
		});
		
		user.save((err, result) => {
			if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(201)
        .json(result)
        .end();
		});
  },

  update: (req, res) => {
    const id = req.params.id;

    const newuser = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			username: req.body.email,
			phone: req.body.email,
			password: req.body.password,
			profileImage: req.body.profileImage
		};
		
		User.findByIdAndUpdate({ _id: id }, { $set: newuser }, (err, result) => {
			if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(201)
        .json(result)
        .end();
		});
  },
  
  delete: (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(user)
        .end();
    });
  }

};
