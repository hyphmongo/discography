import {GraphQLString, GraphQLInt, GraphQLObjectType} from 'graphql';

import property from 'lodash/property';

export default new GraphQLObjectType({
  name: 'Image',
  description: 'Image entity, describes the position and dimensions of an image',
  fields: () => ({
    type: {
      description: 'Whether the image is Primary or Secondary',
      type: GraphQLString,
      resolve: property('type')
    },
    height: {
      description: 'Height of the image',
      type: GraphQLInt,
      resolve: property('height')
    },
    width: {
      description: 'Width of the image',
      type: GraphQLInt,
      resolve: property('width')
    }
  })
});
