const {GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} = require('graphql');
const {UserType, RecipeType} = require('./types');
const {User, Recipe} = require('./models/DatabaseTypes');

const RootQuery = new GraphQLObjectType({
    name : 'Root',
    fields: () => ({
        user: {
            type: UserType,
            args : {
                id: {type: GraphQLID},
            },
                async resolve(parent,args){
                    return User.getById(args.id);
            }
        },
        recipe : {
            type: RecipeType,
            args : {
                id: {type:GraphQLID},
            },
            async resolve(parent,args){
                return Recipe.getById(args.id);
            }
        }
    })
})

module.exports = RootQuery;