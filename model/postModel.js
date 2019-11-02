const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  _idPet: {
    type: Schema.Types.ObjectId,
    required: true
  },
  _idUser: {
    type: Schema.Types.ObjectId,
    required: true
  },
  postType: {
    type: String,
    required: true
  },
  location: {
    lat: {
      type: Number,
      required: true
    },
    lon: {
      type: Number,
      required: true
    }
  },
  status: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model("Post", PostSchema);
