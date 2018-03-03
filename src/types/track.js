import {GraphQLString, GraphQLInt, GraphQLObjectType} from 'graphql';

import property from 'lodash/property';
import {TrackArtist, TrackExtraArtist} from './connections';

export default new GraphQLObjectType({
  description: 'A Track is an individual sound recording, a Release is generally a composition of multiple tracks',
  name: 'Track',
  fields: () => ({
    id: {
      description: 'Unique identifier for the track',
      type: GraphQLString,
      resolve: property('track_id')
    },
    position: {
      description:
        'Where the track is located on the release. For example: the side and number (A1) on a vinyl release',
      type: GraphQLString,
      resolve: property('position')
    },
    title: {
      description: 'Title of the track',
      type: GraphQLString,
      resolve: property('title')
    },
    duration: {
      description: 'Duration of the track',
      type: GraphQLString,
      resolve: property('duration')
    },
    trackno: {
      description: 'Ordered numbering of the track. For example: A1 on a vinyl relesae translates to 01 and A2, 02',
      type: GraphQLInt,
      resolve: property('trackno')
    },
    artists: TrackArtist('TrackArtist'),
    extraArtists: TrackExtraArtist('TrackExtraArtist')
  })
});
