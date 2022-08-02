// Update with your config settings.

const {knexSnakeCaseMappers} = require("objection")

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'ObjecKnexCurd',
      user:     'root',
      password: 'Nav@gur1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory:"./seeds"
    },
    ...knexSnakeCaseMappers
  },
};
