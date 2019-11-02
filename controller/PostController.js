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
      creation_datetime: req.body.creation_datetime,
      lost_datetime: req.body.lost_datetime,
      idUser: req.body.idUser,
      postType: req.body.postType,
      location: req.body.location,
      status: req.body.status,
      description: req.body.description,
      pet: {
        name: req.body.pet.name,
        breed: req.body.pet.breed,
        color: req.body.pet.color,
        age: req.body.pet.age,
        gender: req.body.pet.gender,
        address: req.body.pet.address,
        description: req.body.pet.description,
        images: req.body.pet.images
      },
      owner: req.body.owner,
      rescuer: req.body.rescuer,
      claimants: req.body.claimants
    })
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
      creation_datetime: req.body.creation_datetime,
      lost_datetime: req.body.lost_datetime,
      idUser: req.body.idUser,
      postType: req.body.postType,
      location: req.body.location,
      status: req.body.status,
      description: req.body.description,
      pet: {
        name: req.body.pet.name,
        breed: req.body.pet.breed,
        color: req.body.pet.color,
        age: req.body.pet.age,
        gender: req.body.pet.gender,
        address: req.body.pet.address,
        description: req.body.pet.description,
        images: req.body.pet.images
      },
      owner: req.body.owner,
      rescuer: req.body.rescuer,
      claimants: req.body.claimants
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
