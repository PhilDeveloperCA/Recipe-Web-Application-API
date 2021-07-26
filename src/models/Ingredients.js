import db from '../db';

module.exports = {
    addIngredient : async (recipe_id, name, quantity, units) => {
        const ingredient = await db('ingredients').insert({recipe_id, name, quantity, units});
        return ingredient[0];
    },
    deleteIngredient : async (id) => {
        
    },
    
}