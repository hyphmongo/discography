import {GraphQLInt, GraphQLString, GraphQLList, GraphQLObjectType} from 'graphql';

import property from 'lodash/property';
import {ArtistRelease} from './connections';
import {sanitizeAndSplit} from '../utils';

export const createArtistFields = artistType => ({
  id: {
    description: 'Unique artist identifier',
    type: GraphQLInt,
    resolve: property('id')
  },
  name: {
    description: 'Official name of the artist',
    type: GraphQLString,
    resolve: property('name')
  },
  realName: {
    description: 'Real name of the artist',
    type: GraphQLString,
    resolve: property('realname')
  },
  aliases: {
    description: 'Aliases the artist has or does use',
    type: new GraphQLList(GraphQLString),
    resolve: source => sanitizeAndSplit(source.aliases)
  },
  urls: {
    description: 'URLs of relevant links associated with the artist',
    type: new GraphQLList(GraphQLString),
    resolve: source => sanitizeAndSplit(source.urls)
  },
  releases: ArtistRelease(`${artistType}Release`)
});

export default new GraphQLObjectType({
  name: 'Artist',
  description:
    'The Artist resource represents a person in the Discogs database who contributed to a Release in some capacity.',

  fields: () => ({
    ...createArtistFields('artist')
  })
});
