exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('label').insert({
      id: 1,
      name: 'Planet E',
      contactinfo: `Planet E Communications\rP.O. Box 27218\rDetroit, Michigan, MI 48227\rUSA\r\rPhone: +1 313 874 8729\rFax: +1 313 874 8732\rEmail: info@Planet-e.net`,
      sublabels: `{"Antidote (4)","Community Projects","Guilty Pleasures","I Ner Zon Sounds","Planet E Communications","Planet E Communications, Inc.",TWPENTY}`,
      urls: `{http://planet-e.net,http://planetecommunications.bandcamp.com,http://www.facebook.com/planetedetroit,http://www.flickr.com/photos/planetedetroit,http://plus.google.com/100841702106447505236,http://www.instagram.com/carlcraignet,http://myspace.com/planetecom,http://myspace.com/planetedetroit,http://soundcloud.com/planetedetroit,http://twitter.com/planetedetroit,http://vimeo.com/user1265384,http://en.wikipedia.org/wiki/Planet_E_Communications,http://www.youtube.com/user/planetedetroit}`,
      profile: `[a=Carl Craig]'s classic techno label founded in 1991.\r\rOn at least 1 release, Planet E is listed as publisher.`
    }),
    knex('label').insert({
      id: 86537,
      name: 'Antidote (4)'
    }),
    knex('label').insert({
      id: 41841,
      name: 'Community Projects'
    }),
    knex('label').insert({
      id: 153760,
      name: 'Guilty Pleasures'
    }),
    knex('label').insert({
      id: 31405,
      name: 'I Ner Zon Sounds'
    }),
    knex('label').insert({
      id: 277579,
      name: 'Planet E Communications'
    }),
    knex('label').insert({
      id: 294738,
      name: 'Planet E Communications, Inc.'
    }),
    knex('label').insert({
      id: 488315,
      name: 'TWPENTY'
    }),
    knex('label').insert({
      id: 123456,
      name: 'Polydor, S.A.',
      parent_label: 'Polydor International'
    }),
    knex('label').insert({
      id: 73924,
      name: 'Polydor International'
    }),
    knex('label').insert({
      id: 5,
      name: 'Svek'
    }),
    knex('label').insert({
      id: 22912,
      name: 'Hotflush Recordings'
    }),
    knex('label').insert({
      id: 742086,
      name: 'Hotflush Recordings Ltd'
    })
  );
};
