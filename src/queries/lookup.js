import {GraphQLObjectType, GraphQLInt} from 'graphql';
import {Artist, Label, Release, Master} from '../types';

function createLookupQuery(type) {
  return {
    type,
    description: `Return entity of type: ${type.name}`,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: async (_, args, context) => {
      return context.db
        .select()
        .from(type.name.toLowerCase())
        .where(args)
        .first();
    }
  };
}

export default {
  type: new GraphQLObjectType({
    name: 'Lookup',
    description: 'Return a single discogs entity from its unique identifier',
    fields: () => ({
      artist: createLookupQuery(Artist),
      label: createLookupQuery(Label),
      release: createLookupQuery(Release),
      master: createLookupQuery(Master)
    })
  }),
  resolve: source => ({})
};
