const express = require ('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express ();

//conect to db

mongoose.connect('mongodb+srv://saulGraphql:Escpre18@@cluster0-2krof.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('conenected to db')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log( 'Running at 4000 port');
});