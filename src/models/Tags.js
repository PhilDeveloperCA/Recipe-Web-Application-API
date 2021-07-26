const db = require('../db');

module.exports = {
    addTag : (recipe_id, name) => {
        var existing_tag = await db('tags').where('name', name);
        if(existing_tag.length> 0){
            await db('recipe_tags').insert({recipe_id, tag_id = existing_tag[0].id});
        }
        else{
            new tag = await db('tags').insert({name}).returning('*');
            await db('recipe_tags').insert({recipe_id, tag_id = tag[0].id });
        }
    },

    removeTag : (tag_id) => {
        var remove_tag = await db('tags').delete
    }
}