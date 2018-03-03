exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('artist', table => {
      table.integer('id').notNullable();
      table.string('name').notNullable();
      table.string('realname');
      table.string('urls');
      table.string('namevariations');
      table.string('aliases');
      table.string('profile');
      table.string('members');
      table.string('groups');
      table.string('data_quality');
    }),

    knex.schema.createTable('label', table => {
      table.integer('id').notNullable();
      table.string('name').notNullable();
      table.string('contactinfo');
      table.string('profile');
      table.string('parent_label');
      table.string('sublabels');
      table.string('urls');
      table.string('data_quality');
    }),

    knex.schema.createTable('release', table => {
      table.integer('id').notNullable();
      table.string('status');
      table.string('title');
      table.string('country');
      table.string('released');
      table.string('barcode');
      table.string('notes');
      table.string('genres');
      table.string('styles');
      table.string('data_quality');
      table.integer('master_id');
    }),

    knex.schema.createTable('master', table => {
      table.integer('id').notNullable();
      table.string('title');
      table.integer('main_release').notNullable();
      table.integer('year');
      table.string('notes');
      table.string('genres');
      table.string('styles');
      table.string('role');
      table.string('data_quality');
    }),

    knex.schema.createTable('releases_artists', table => {
      table.integer('release_id');
      table.integer('position');
      table.integer('artist_id');
      table.string('artist_name');
      table.string('anv');
      table.string('join_relation');
    }),

    knex.schema.createTable('releases_extraartists', table => {
      table.integer('release_id');
      table.integer('artist_id');
      table.string('artist_name');
      table.string('anv');
      table.string('role');
    }),

    knex.schema.createTable('releases_labels', table => {
      table.string('label');
      table.integer('release_id');
      table.string('catno');
    }),

    knex.schema.createTable('releases_formats', table => {
      table.integer('release_id');
      table.integer('position');
      table.string('format_name');
      table.string('descriptions');
      table.decimal('qty', 100, 0);
    }),

    knex.schema.createTable('releases_images', table => {
      table.integer('release_id');
      table.string('type');
      table.integer('height');
      table.integer('width');
      table.string('image_uri');
    }),

    knex.schema.createTable('track', table => {
      table.integer('release_id');
      table.string('position');
      table.increments('track_id');
      table.string('title');
      table.string('duration');
      table.int('trackno');
    }),

    knex.schema.createTable('tracks_artists', table => {
      table.string('track_id');
      table.integer('position');
      table.integer('artist_id');
      table.string('artist_name');
      table.string('anv');
      table.string('join_relation');
    }),

    knex.schema.createTable('tracks_extraartists', table => {
      table.string('track_id');
      table.integer('artist_id');
      table.string('artist_name');
      table.string('anv');
      table.string('role');
      table.string('data_quality');
    })
  ]);
};

exports.down = () => {};
