import path from 'path';

module.exports = {
  testing: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: path.join(__dirname, '../__TEST__/fixtures/database/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '../__TEST__/fixtures/database/seeds')
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
