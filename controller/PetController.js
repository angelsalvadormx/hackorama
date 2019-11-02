const Pet = require("../model/petModel");

module.exports = {
  
  getAll: (req, res) => {
    console.log('fkgmldgf')
    Pet.find(req.query, (err, pets) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(pets)
        .end();
    });
  },

  getById: (req, res) => {
    const id = req.params.id;
    Pet.findById(id, (err, pet) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(pet)
        .end();
    });
  },

  save: (req, res) => {
    const pet = new Pet({
      name: req.body.name,
      breed: req.body.breed,
      color: req.body.color,
      age: req.body.age,
      gender: req.body.gender,
      address: req.body.address,
      description: req.body.description,
      images: req.body.images
    });

    pet.save((err, result) => {
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

    const newpet = {
      name: req.body.name,
      breed: req.body.breed,
      color: req.body.color,
      age: req.body.age,
      gender: req.body.gender,
      address: req.body.address,
      description: req.body.description,
      images: req.body.images
    };

    Pet.findByIdAndUpdate({ _id: id }, { $set: newpet }, (err, result) => {
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

    Pet.findByIdAndDelete(id, (err, pet) => {
      if (err) {
        res
          .status(500)
          .json({ message: err.message })
          .end();
      }
      res
        .status(200)
        .json(pet)
        .end();
    });
  }
};
