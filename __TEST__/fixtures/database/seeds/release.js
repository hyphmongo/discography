exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('release').insert({
      id: 1,
      status: 'Accepted',
      title: 'Stockholm',
      country: 'Sweden',
      released: '1993-03-00',
      genres: '{Electronic}',
      styles: '{"Deep House"}'
    }),
    knex('release').insert({
      id: 2,
      status: 'Accepted',
      title: `Knockin' Boots Vol 2 Of 2`,
      country: 'Sweden',
      released: '1998-06-00',
      notes: 'All joints recorded in NYC (Dec.97).',
      genres: '{Electronic}',
      styles: `{"Broken Beat",Techno,"Tech House"}`,
      master_id: 713738
    }),
    knex('release').insert({
      id: 3,
      master_id: 66256,
      title: 'Profound Sounds Vol. 1'
    }),
    knex('release').insert({
      id: 1025,
      status: 'Accepted',
      title: 'Silentintroduction',
      country: 'US',
      released: '1997-11-00',
      genres: '{Electronic}',
      styles: `{"Deep House",House}`,
      master_id: 6119
    }),
    knex('release').insert({
      id: 2056532,
      status: 'Accepted',
      title: `Hyph Mngo (Andreas Saag's House Perspective)`,
      country: 'Sweden',
      released: '2009-12-20',
      notes: '125bpm',
      genres: '{Electronic}',
      styles: '{House}'
    }),
    knex('release').insert({
      id: 5477,
      title: 'New Soil',
      master_id: 18500
    }),
    knex('release').insert({
      id: 2151,
      title: 'U Got Me',
      country: 'US',
      released: '1992-00-00',
      genres: '{Electronic}',
      styles: `{"Deep House"}`
    }),
    knex('release').insert({
      id: 2152,
      title: 'Together',
      country: 'US',
      released: '1992-00-00',
      genres: '{Electronic}',
      styles: `{"Deep House"}`
    }),
    knex('release').insert({
      id: 2153,
      title: "Some Lovin'",
      country: 'US',
      released: '1992-00-00',
      genres: '{Electronic}',
      styles: `{"Deep House"}`
    })
  );
};
