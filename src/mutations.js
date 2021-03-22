const {UserType, RecipeType} = require('./types');
const {User,Recipe} = require('./models/DatabaseTypes');
const {GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} = require('graphql');

const Mutations = new GraphQLObjectType({
    name : 'Mutation',
    fields: () => ({
        signup : {
            type: UserType,
            args: {
                username : {type: GraphQLString},
                password  :  {type: GraphQLString}
            },
            async resolve(parent,args){
                const user = await User.signup(args.username, args.password);
                return user;
            }
        },

        createRecipe : {
            type: RecipeType,
            args : {
                user_id: {type: GraphQLID},
                title : {type: GraphQLString},
                description : {type: GraphQLString},
            },
           async resolve(parent,args){
                const recipe = await Recipe.createRecipe(args.user_id, args.title, args.description);
            }
        }
    })
})

module.exports = Mutations;