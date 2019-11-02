const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  creation_datetime: {
    type: Schema.Types.Date,
    required: false
  },
  lost_datetime: {
    type: Schema.Types.Date,
    required: false
  },
  idUser: {
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
  },
  pet: {
    name: {
      type: String,
      required: false
    },
    breed: {
      type: String,
      required: false
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
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: false
  },
  rescuer: {
    type: Schema.Types.ObjectId,
    required: false
  },
  claimants: [
    {
      type: Schema.Types.ObjectId,
      required: false
    }
  ]
});

module.exports = mongoose.model("Post", PostSchema);
