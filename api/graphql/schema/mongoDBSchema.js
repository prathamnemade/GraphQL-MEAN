const { makeExecutableSchema } = require('graphql-tools');
const {
    getUser_R } = require('../resolvers/mongoDBSchema');
const {
    getLogin_MDB} =require('../controllers/mongoDBSchema')   
const typeDefs = `
type Login{
    email:String!
    firstname:String!
    lastname:String
    hash:String!
    salt:String!
}
type Registration{
    login:Login!
    birthday:String
    gender:String
    registered:String
    avatarExists:String
    registrationID:String
}
type Query{
    getLogin(email:String,firstname:String,lastname:String,hash:String,salt:String):Login
}
`
const resolvers = {
    Query: {
        getLogin: (_, args, content) => getUser_R(args,content,getLogin_MDB)
    }

}
module.exports = new makeExecutableSchema({ typeDefs, resolvers });