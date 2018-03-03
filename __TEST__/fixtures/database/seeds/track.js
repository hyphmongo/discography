exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('track').insert({
      release_id: 1,
      position: 'A',
      title: 'Östermalm',
      duration: '4:45',
      trackno: 1
    }),
    knex('track').insert({
      release_id: 1,
      position: 'B1',
      title: 'Vasastaden',
      duration: '6:11',
      trackno: 2
    }),
    knex('track').insert({
      release_id: 3,
      position: '1',
      title: 'Untitled 8',
      trackno: 1
    }),
    knex('track').insert({
      release_id: 3,
      position: 2,
      title: 'Anjua (Sneaky 3)',
      trackno: 2
    }),
    knex('track').insert({
      release_id: 3,
      position: 3,
      title:
        'When The Funk Hits The Fan (Mood II Swing When The Dub Hits The Fan)',
      trackno: 3
    }),
    knex('tracks_artists').insert({
      track_id: 3,
      position: 1,
      artist_id: 5
    }),
    knex('tracks_artists').insert({
      track_id: 3,
      position: 2,
      artist_id: 4
    }),
    knex('tracks_extraartists').insert({
      track_id: 5,
      artist_id: 8,
      artist_name: 'Mood II Swing',
      role: 'Remix'
    })
  );
};
