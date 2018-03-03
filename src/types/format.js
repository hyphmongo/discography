import {GraphQLString, GraphQLList, GraphQLInt, GraphQLObjectType} from 'graphql';

import property from 'lodash/property';

export default new GraphQLObjectType({
  name: 'Format',
  fields: () => ({
    position: {
      description: 'Position in the list of formats available',
      type: GraphQLInt,
      resolve: property('position')
    },
    formatName: {
      description: 'Name of the format',
      type: GraphQLString,
      resolve: property('format_name')
    },
    quantity: {
      description: 'Number of physical items that make up the release in this format',
      type: GraphQLInt,
      resolve: property('qty')
    },
    descriptions: {
      description: 'Extra information about the format: record size, speed played at, etc',
      type: new GraphQLList(GraphQLString),
      resolve: property('descriptions')
    }
  })
});
