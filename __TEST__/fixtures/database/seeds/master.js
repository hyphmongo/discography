exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('master').insert({
      id: 713738,
      main_release: 2,
      title: `Knockin' Boots Vol 2 Of 2`
    }),
    knex('master').insert({
      id: 18500,
      title: 'New Soil',
      main_release: 155102,
      year: 2001,
      genres: '{Electronic}',
      styles: '{Techno}'
    }),
    knex('master').insert({
      id: 188325,
      title: 'Hyph Mngo / Wet Look',
      main_release: 1921107,
      year: 2009,
      genres: '{Electronic}',
      styles: `{"UK Garage",Dubstep}`
    })
  );
};
