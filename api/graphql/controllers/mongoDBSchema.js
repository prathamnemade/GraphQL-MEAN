const _ = require('lodash');
const Registartion = require('../../models/registration')
const Login =require('../../models/login')


const getLogin_MDB = user => {
    console.log(user);
    
    return Login.find({ email: user.email }).then((res) => {
        if (res.length > 0) {
            return { name: res[0].name, email: res[0].email, message: "User not found, Please logout and login again." }
        } else {
            return { name: "", email: "", message: "User not found, Please logout and login again." };
        }
    });
};
module.exports = { getLogin_MDB }
