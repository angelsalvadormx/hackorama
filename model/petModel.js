const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  images: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("Pet", PetSchema);
