const mongoose = require('mongoose');

// IMPORT AND CONNECT THE DATABASE
mongoose.connect('mongodb://localhost/userData');


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports= mongoose.model('User',UserSchema)
