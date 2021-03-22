var config  = require('../knexfile')['development'];
//const db = require('knex')(config['development']);
module.exports = require('knex')(config);