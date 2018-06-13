import knex from 'knex';
import config from './knexfile';

export default async function(environment) {
  const db = knex(config[environment]);

  if (environment === 'testing') {
    await db.migrate.latest(config[environment]);
    await db.seed.run(config[environment]);
  }

  return db;
}
