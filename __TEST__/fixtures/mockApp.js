import express from 'express';
import supertest from 'supertest';
import bodyParser from 'body-parser';
import {graphqlExpress} from 'apollo-server-express';

import RootSchema from '../../src/schema';
import database from '../../src/database';
import createLoaders from '../../src/loaders';

export default async () => {
  const app = express();

  const db = await database('testing');

  app.use(
    '/',
    bodyParser.json(),
    graphqlExpress({
      schema: RootSchema,
      context: () => ({db, loaders: createLoaders(db)})
    })
  );

  return supertest(app);
};
