exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('releases_artists').insert({
      release_id: 1,
      position: 1,
      artist_id: 1,
      artist_name: 'The Persuader',
      join_relation: ','
    }),
    knex('releases_extraartists').insert({
      release_id: 2,
      artist_id: 26,
      artist_name: 'Alexi Delano',
      role: 'Producer'
    }),
    knex('releases_extraartists').insert({
      release_id: 2,
      artist_id: 26,
      artist_name: 'Alexi Delano',
      role: 'Recorded By'
    }),
    knex('releases_extraartists').insert({
      release_id: 2,
      artist_id: 26,
      artist_name: 'Alexi Delano',
      anv: 'A. Delano',
      role: 'Written-By'
    }),
    knex('releases_extraartists').insert({
      release_id: 2,
      artist_id: 27,
      artist_name: 'Cari Lekebusch',
      role: 'Producer'
    }),
    knex('releases_extraartists').insert({
      release_id: 2,
      artist_id: 27,
      artist_name: 'Cari Lekebusch',
      role: 'Recorded By'
    }),
    knex('releases_extraartists').insert({
      release_id: 2,
      artist_id: 27,
      artist_name: 'Cari Lekebusch',
      anv: 'C. Lekebusch',
      role: 'Written-By'
    }),
    knex('releases_labels').insert({
      label: 'Planet E',
      release_id: 1025,
      catno: 'pe65234'
    }),
    knex('releases_formats').insert({
      release_id: 2,
      position: 1,
      format_name: 'Vinyl',
      qty: 1,
      descriptions: `{"12","33 ⅓ RPM"}`
    }),
    knex('releases_images').insert({
      release_id: 2,
      type: 'primary',
      height: 394,
      width: 400
    }),
    knex('releases_images').insert({
      release_id: 2,
      type: 'secondary',
      height: 600,
      width: 600
    }),
    knex('releases_labels').insert({
      label: 'Svek',
      release_id: 1,
      catno: 'SK032'
    })
  );
};
