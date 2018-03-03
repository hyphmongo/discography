import {wrapConnection} from './helpers';
import Release from './release';
import Artist from './artist';
import ExtraArtist from './extra-artist';
import Label from './label';
import Track from './track';

export const ArtistRelease = name =>
  wrapConnection({
    description: 'Releases from this artist',
    name: name,
    type: Release,
    loader: 'release',
    identifier: 'release_id',

    query: function(source, context, args) {
      return context
        .db('releases_artists')
        .select('release_id')
        .where('artist_id', source.id)
        .orderBy('release_id', 'asc');
    }
  });

export const LabelRelease = name =>
  wrapConnection({
    description: 'Releases on this label',
    name: name,
    type: Release,
    loader: 'release',
    identifier: 'release_id',

    query: function(source, context, args) {
      return context
        .db('releases_labels')
        .select('release_id')
        .where('label', source.name)
        .orderBy('release_id', 'asc');
    }
  });

export const MasterRelease = name =>
  wrapConnection({
    description: 'Releases linked to the master release',
    name: name,
    type: Release,
    loader: 'release',
    identifier: 'id',

    query: function(source, context, args) {
      return context
        .db('release')
        .select('id')
        .where('master_id', source.id)
        .orderBy('id', 'asc');
    }
  });

export const ReleaseArtist = name =>
  wrapConnection({
    description: 'Main artist on this release',
    name: name,
    type: Artist,
    loader: 'artist',
    identifier: 'artist_id',

    query: function(source, context, args) {
      return context
        .db('releases_artists')
        .select('artist_id')
        .where('release_id', source.id)
        .orderBy('artist_id', 'asc');
    }
  });

export const ReleaseExtraArtist = name =>
  wrapConnection({
    description: 'Extra artists with a role in this release',
    name: name,
    type: ExtraArtist,

    query: function(source, context, args) {
      return context
        .db('releases_extraartists')
        .select()
        .where('release_id', source.id)
        .leftJoin('artist', 'artist.id', 'releases_extraartists.artist_id')
        .orderBy('artist_id', 'asc');
    }
  });

export const ReleaseLabel = name =>
  wrapConnection({
    description: 'Labels that have featured this release',
    name: name,
    type: Label,
    loader: 'label',
    identifier: 'label',

    query: function(source, context, args) {
      return context
        .db('releases_labels')
        .select('label')
        .where('release_id', source.id);
    }
  });

export const ReleaseTrack = name =>
  wrapConnection({
    description: 'Tracks on this release',
    name: name,
    type: Track,
    loader: 'track',
    identifier: 'track_id',

    query: function(source, context, args) {
      return context
        .db('track')
        .select()
        .where('release_id', source.id)
        .orderBy('trackno', 'asc');
    }
  });

export const TrackArtist = name =>
  wrapConnection({
    description: 'Main artists who have been credited with this track',
    name: name,
    type: Artist,
    loader: 'artist',
    identifier: 'artist_id',

    query: async function(source, context, args) {
      return context
        .db('tracks_artists')
        .select('artist_id')
        .where('track_id', source.track_id)
        .orderBy('artist_id', 'asc');
    }
  });

export const TrackExtraArtist = name =>
  wrapConnection({
    description: 'Extra artists who have contributed to this track',
    name: name,
    type: ExtraArtist,

    query: async function(source, context, args) {
      return context
        .db('tracks_extraartists')
        .select()
        .where('track_id', source.track_id)
        .leftJoin('artist', 'artist.id', 'tracks_extraartists.artist_id')
        .orderBy('artist_id', 'asc');
    }
  });
