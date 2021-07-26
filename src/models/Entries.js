const db = require('../db');

module.exports = {
    getEntriesByRecipe : async(recipe_id) => {
        return await db('entries').where('recipe_id', recipe_id);
    },
    createEntry: async(recipe_id, title, description, pic ) => {
        var entry=  await db('entries').insert({recipe_id, title, description, pic}).returning('*');
        return entry[0]
    },
    deleteEntry : async(id) => {
        return await db('entries').del
    }
}