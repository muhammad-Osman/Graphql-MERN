const express = require("express");
const colors = require('colors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const connectDatabase = require('./config/database');
const port = process.env.PORT || 4000;

const app = express();

// connection with database
connectDatabase();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`.blue.bold));