const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  profileImage: {
    type: String,
    required: true
  }
});

UserSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model("User", UserSchema);
