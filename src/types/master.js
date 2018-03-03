import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql';

import property from 'lodash/property';
import {MasterRelease} from './connections';
import {sanitizeAndSplit} from '../utils';

export default new GraphQLObjectType({
  description:
    'The Master resource represents a set of similar Releases. Masters (also known as “master releases”) have a “main release” which is often the chronologically earliest.',
  name: 'Master',
  fields: () => ({
    id: {
      description: 'Unique identifier for the master release',
      type: GraphQLInt,
      resolve: property('id')
    },
    title: {
      description: 'Title of the master release',
      type: GraphQLString,
      resolve: property('title')
    },
    year: {
      description: 'Year the master release was officially released',
      type: GraphQLInt,
      resolve: property('year')
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
    releases: MasterRelease('MasterRelease')
  })
});
