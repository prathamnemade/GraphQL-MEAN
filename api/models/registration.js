var mongoose = require('mongoose');
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
    },
    birthday: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    registered:{
        type: String,
        required: true
    },
    registrationID:{
        type:String,
        required: true
    },
    avatarExists:{
        type:Boolean,
        required:true
    }
});

mongoose.model('Registration', userSchema);
