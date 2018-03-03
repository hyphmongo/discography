import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import {Engine} from 'apollo-engine';
import RootSchema from './schema';
import createLoaders from './loaders';
import database from './database';

(async function() {
  const app = express();
  const db = await database('production');

  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      schema: RootSchema,
      context: () => ({db, loaders: createLoaders(db)}),
      tracing: true,
      cacheControl: true
    })
  );

  app.get('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

  if (process.env.ENGINE_KEY) {
    const engine = new Engine({
      graphqlPort: process.env.APP_PORT,
      engineConfig: {
        apiKey: process.env.ENGINE_KEY
      }
    });

    engine.start();
    app.use(engine.expressMiddleware());
  }

  app.listen(process.env.PORT || 3000);
})();
