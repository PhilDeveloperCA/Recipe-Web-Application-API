
exports.up = function(knex) {
  return knex.schema.createTable('saves', (table) => {
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.integer('recipe_id').references('id').inTable('users');
  })
  .createTable('likes', (table) => {
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.integer('recipe_id').references('id').inTable('users');
  })
  .createTable('tags', (table) => {
      table.increments();
      table.string('name', 55);
  })
  .createTable('recipe_tags', (table) => {
      table.increments();
      table.integer('tag_id').references('id').inTable('tags');
      table.integer('recipe_id').references('id').inTable('recipes');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipe_tags').dropTable('tags').dropTable('likes').dropTable('saves');
};
