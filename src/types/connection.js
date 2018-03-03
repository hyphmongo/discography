import {GraphQLInt, GraphQLList, GraphQLObjectType} from 'graphql';

import createEdgeType from './edge';
import {PageInfo} from './index';
import {splitCamel} from '../utils';

export default function createConnectionType(type, name) {
  const edgeType = createEdgeType(type, name);

  return new GraphQLObjectType({
    description: `${splitCamel(name)} connection`,
    name: `${name}Connection`,
    fields: () => ({
      edges: {
        description: 'List of edges to connecting nodes',
        type: new GraphQLList(edgeType),
        resolve: source => source.edges
      },
      pageInfo: {
        description: 'Pagination information',
        type: PageInfo,
        resolve: source => source
      },
      totalReturned: {
        description: 'Total number of edges returned',
        type: GraphQLInt,
        resolve: source => source.edges.length
      }
    })
  });
}
