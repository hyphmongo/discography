import {GraphQLInt, GraphQLString} from 'graphql';

import createConnectionType from './connection';
import {base64Decode} from '../utils';

export function composeResolver(opts) {
  return async function(source, ctx) {
    let results = await source.query;

    const edges =
      opts.loader && opts.identifier
        ? await ctx.loaders[opts.loader].loadMany(results.map(r => r[opts.identifier]))
        : results;

    return {
      ...source,
      edges
    };
  };
}

export function wrapConnection(field) {
  return {
    description: field.description,
    type: createConnectionType(field.type, field.name),
    args: {
      first: {
        type: GraphQLInt
      },
      after: {
        type: GraphQLString
      },
      ...field.args
    },
    resolve: async function(source, args, context, resolveInfo) {
      const query = field.query(source, context, args);

      if (args.first) {
        query.limit(args.first);
      }

      if (args.after) {
        query.andWhere(`${getIdField(query)}`, '>', base64Decode(args.after));
      }

      return composeResolver(field)(
        {
          ...source,
          args,
          query
        },
        context
      );
    }
  };
}

function getIdField(query) {
  if (query._single.table === 'track') {
    return 'trackno';
  }

  return 'id';
}
