import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql';

import {Format, Image, Master} from './index';

import {sanitizeAndSplit} from '../utils';
import property from 'lodash/property';

import {
  ReleaseArtist,
  ReleaseExtraArtist,
  ReleaseLabel,
  ReleaseTrack
} from './connections';

export default new GraphQLObjectType({
  description:
    'The Release resource represents a particular physical or digital object released by one or more Artists.',
  name: 'Release',
  fields: () => ({
    id: {
      description: 'Unique identifier of the release',
      type: GraphQLInt,
      resolve: property('id')
    },
    title: {
      description: 'Title of the release',
      type: GraphQLString,
      resolve: property('title')
    },
    country: {
      description:
        'Country of origin. Usually this is the country the label is active in',
      type: GraphQLString,
      resolve: property('country')
    },
    released: {
      description: 'Date of release. Has no specific structure',
      type: GraphQLString,
      resolve: property('released')
    },
    genres: {
      description:
        'List of main genres the release is categorised as. Genres are top level classifications, e.g. Electronic, Rock',
      type: new GraphQLList(GraphQLString),
      resolve: source => sanitizeAndSplit(source.genres)
    },
    styles: {
      description:
        'List of styles the release is categorised as. Styles are genres with more specificty, e.g. Techno, House',
      type: new GraphQLList(GraphQLString),
      resolve: source => sanitizeAndSplit(source.styles)
    },
    formats: {
      description: 'Formats the release has been distributed on',
      type: new GraphQLList(Format),
      resolve: (source, args, context) => {
        return context.loaders.format.load(source.id);
      }
    },
    images: {
      description: 'Images such as cover art, record centre labels',
      type: new GraphQLList(Image),
      resolve: (source, args, context) => {
        return context.loaders.image.load(source.id);
      }
    },
    master: {
      description: 'Node corresponding to the master release',
      type: Master,
      resolve: (source, args, context) => {
        return (
          source.master_id && context.loaders.master.load(source.master_id)
        );
      }
    },
    artists: ReleaseArtist('ReleaseArtist'),
    labels: ReleaseLabel('ReleaseLabel'),
    tracks: ReleaseTrack('ReleaseTrack'),
    extraArtists: ReleaseExtraArtist('ReleaseExtraArtist')
  })
});
