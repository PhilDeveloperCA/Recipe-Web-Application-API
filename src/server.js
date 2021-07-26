const server = require('express-graphql');
const middleware = server.graphqlHTTP;
require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const graphql = require('graphql');
const User = require('./models/User.js');
const {GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} = graphql;
const {UserType} = require('./types');
const RootQuery = require('./query');
const Mutations = require('./mutations.js');

var corsOptions = {
    origin : '*',
    optionsSuccessStatus: 200,
    credentials: true,
}

const schema = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutations,
})

app.use(cors(corsOptions));

app.use('/graphql', middleware({
    schema,
    graphiql : true,
}))


app.listen(5000, () => {
    console.log('listening on port 5000');
});

