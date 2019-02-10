const _ = require('lodash');
var mongoose = require('mongoose');
const Registartion = require('../../models/registration')
var Login = mongoose.model('Login');


const getLogin_MDB = user => {
    console.log("user11", user);
    return Login.findOne({ "email": user.email }).then((data) => {
        console.log("data:", data);
        return { email: data.email, firstname: data.firstname, lastname: data.lastname, password: data.password }
    })
};
module.exports = { getLogin_MDB }
