
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.string('username', 55);
      table.string('password');
  })
  .createTable('recipes', table => {
      table.increments();
      table.integer('user_id').references('id').inTable('users')
      table.string('title', 123);
      table.string('description', 1023);
      table.string('pic').nullable();
  })
  .createTable('entries', table => {
      table.increments();
      table.integer('recipe_id').references('id').inTable('recipes');
      table.string('description', 511);
      table.string('url').nullable();
  })
  .createTable('ingredients', table => {
      table.increments();
      table.integer('recipe_id').references('id').inTable('recipes');
      table.string('name', 55);
      table.string('quantity', 55);
      table.string('units', 55);
  })
};

exports.down = function(knex) {
  
};
