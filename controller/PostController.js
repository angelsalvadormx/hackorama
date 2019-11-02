const Post = require("../model/postModel");

module.exports = {
  getAll: (req, res) => {
    Post.find(req.query, (err, posts) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(posts)
        .end();
    });
  },

  getById: (req, res) => {
    const id = req.params.id;
    Post.findById(id, (err, post) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(post)
        .end();
    });
  },

  save: (req, res) => {
    const post = new Post({
      _idPet: req.body.idPet,
      _idUser: req.body.idUser,
      postType: req.body.postType,
      location: {
        lat: req.body.lat,
        lon: req.body.lon
      },
      status: req.body.status,
      description: req.body.description
    });

    post.save((err, result) => {
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

    const newPost = {
      _idPet: req.body.idPet,
      _idUser: req.body.idUser,
      postType: req.body.postType,
      location: {
        lat: req.body.lat,
        lon: req.body.lon
      },
      status: req.body.status,
      description: req.body.description
    };

    Post.findByIdAndUpdate({ _id: id }, { $set: newPost }, (err, result) => {
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

    Post.findByIdAndDelete(id, (err, post) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(post)
        .end();
    });
  }
};
