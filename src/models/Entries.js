const db = require('../db');

module.exports = {
    getEntriesByRecipe : async(recipe_id) => {
        return await db('entries').where('recipe_id', recipe_id);
    }
}