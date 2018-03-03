import {GraphQLString, GraphQLObjectType} from 'graphql';

import property from 'lodash/property';
import {createArtistFields} from './artist';

export default new GraphQLObjectType({
  name: 'ExtraArtist',
  description:
    'The Artist resource represents a person in the Discogs database who contributed to a Release in some capacity.',
  fields: () => ({
    ...createArtistFields('ExtraArtist'),
    role: {
      description: 'Role the artist has in the parent entity',
      type: GraphQLString,
      resolve: property('role')
    }
  })
});
