var mongoose = require( 'mongoose' );
// var crypto = require('crypto');
// var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
   
  },
  password: {
    type: String,
    required: true
  }
});
mongoose.model('Login', userSchema);
