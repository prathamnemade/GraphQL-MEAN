
var express = require('express');
const graphqlHTTP = require('express-graphql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
schema = require('./api/graphql/schema/mongoDBSchema');
// [SH] Bring in the data model
require('./api/config/db');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(9999, () => console.log(`Example app listening on port 9999!`))
