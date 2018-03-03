import {GraphQLString, GraphQLBoolean, GraphQLObjectType} from 'graphql';

import isEmpty from 'lodash/isEmpty';
import last from 'lodash/last';
import {base64Encode} from '../utils';

const QUERY_LIMIT = 99999999999;

const getProjectedField = table => {
  if (table === 'track') {
    return 'track_id';
  }

  return 'id';
};

export default new GraphQLObjectType({
  description: "Pagination information describing how to paginate through a connection's result set",
  name: 'PageInfo',
  fields: () => ({
    hasNextPage: {
      description: 'Does the set of results have a next page',
      type: GraphQLBoolean,
      resolve: async function(source) {
        const projectedField = getProjectedField(source.query._single.table);
        const count = await source.query.select(projectedField).limit(QUERY_LIMIT);
        return source.args.first && count.length > source.args.first;
      }
    },
    endCursor: {
      description: 'The cursor to access the last page of results',
      type: GraphQLString,
      resolve: async function(source) {
        if (isEmpty(source.edges)) {
          return null;
        }

        const lastItem = last(source.edges);

        return base64Encode(lastItem.id || lastItem.trackno);
      }
    }
  })
});
