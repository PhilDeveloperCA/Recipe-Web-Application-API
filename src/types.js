const {GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} = require('graphql');
const Entries = require('./models/Entries');
const Recipe = require('./models/Recipe');
const User = require('./models/User');

const UserType = new GraphQLObjectType({
    name : 'User',
    fields : () => ({
        id : {type:GraphQLID},
        username: {type:GraphQLString},
        recipes : {type:GraphQLList(RecipeType),
            async resolve(parent,args){
                return Recipe.getByUserId(parent.id);
            }
        },
        recipesLiked : {type:GraphQLInt, 
            async resolve(parent,args){
                return User.getNumberLiked(parent.id);
            }
        }
    })
})

const RecipeType = new GraphQLObjectType({
    name: 'Recipe',
    fields: () => ({
        id: {type:GraphQLID},
        title : {type:GraphQLString},
        description: {type:GraphQLString},
        entries : {
            type: GraphQLList(EntryType),
            async resolve(parent,args){
                return Entries.getEntriesByRecipe(parent.id);
            }
        }
    })
})

const EntryType = new GraphQLObjectType({
    name : 'Entry',
    fields : () => ({
        id: {type:GraphQLID},
        description : {type : GraphQLString},
    })
})

module.exports = {
    UserType,
    RecipeType,
    EntryType
}