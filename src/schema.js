import {GraphQLSchema, GraphQLObjectType} from 'graphql';

import LookupQuery from './queries/lookup';
import SearchQuery from './queries/search';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      lookup: LookupQuery,
      search: SearchQuery
    })
  })
});
