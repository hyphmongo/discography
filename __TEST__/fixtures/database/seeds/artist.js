exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('artist').insert({
      id: 1,
      name: 'The Persuader',
      realname: 'Jesper Dahlbäck',
      namevariations: `{Persuader,"The Presuader"}`,
      aliases: `{"Dick Track",Faxid,"Groove Machine","Janne Me' Amazonen","Jesper Dahlbäck",Lenk,"The Pinguin Man"}`
    }),
    knex('artist').insert({
      id: 5,
      name: 'Heiko Laux'
    }),
    knex('artist').insert({
      id: 4,
      name: 'Johannes Heil'
    }),
    knex('artist').insert({
      id: 8,
      name: 'Mood II Swing'
    }),
    knex('artist').insert({
      id: 1564482,
      name: 'Joy Orbison',
      realname: `Peter O'Grady`,
      namevariations: `{"Joy O"}`,
      aliases: `{"Peter O'Grady"}`,
      profile: 'Nephew of [a2332].',
      urls: `{http://www.facebook.com/pages/Joy-Orbison/192924608912,http://myspace.com/joyorbison,http://www.songkick.com/artists/2552181-joy-orbison,http://www.liaisonartists.com/artist/joy-orbison,http://en.wikipedia.org/wiki/Joy_Orbison,http://www.whosampled.com/Joy-Orbison/,http://soundcloud.com/joy-orbison,http://equipboard.com/pros/joy-orbison}`
    }),
    knex('artist').insert({
      id: 26,
      name: 'Alexi Delano',
      realname: 'Alexi Delano',
      urls: `{http://www.myspace.com/alexidelano,http://twitter.com/AlexiDelano}`,
      namevariations: `{"A Delano","A. D.","A. Delano",A.D,A.D.,A.Delano,AD,"Alex Delano","Alexei Delano","Alexi "Adny" Delano","Alexi Delano (ADNY)","Alexi Dolano","Alexi V. Delano",Delano,"Delano, Alexi","DJ Alexi","DJ Alexi Delano","Lords Of Svek"}`,
      aliases: `{A.D.1010,ADNY,"Bob Brewthbaker",G.O.L.,Leiva}`
    }),
    knex('artist').insert({
      id: 27,
      name: 'Cari Lekebusch',
      realname: 'Kari Pekka Lekebusch',
      urls: `{http://www.lekebuschmusik.se,http://blog.carilekebusch.com,http://de.wikipedia.org/wiki/Cari_Lekebusch,http://twitter.com/carilekebusch,http://www.facebook.com/pages/Cari-Lekebusch/36671431790,http://www.youtube.com/carilekebusch,http://www.flickr.com/photos/carilekebusch,http://soundcloud.com/carilekebusch,http://www.beatport.com/artists/cari+lekebusch,http://www.residentadvisor.net/dj/carilekebusch,http://www.alivenotdead.com/CariLekebusch,http://www.myspace.com/carilekebusch,http://world.secondlife.com/resident/ce8435c8-f55c-4710-aab4-ac7156078221}`,
      namevariations: `{"C Lekebusch",C-Blast,"C. Lekebusch","C. Lekebush",C.Lekebusch,C.Lekebush,"Cari Le Kebusch","Cari Leke Busch","Cari Lekebusch den rykande Bönsyrsan","Cari Lekebush","Cari Lelebusch","Carl Lekebusch",Lekebusch,"Lekebusch Musik"}`,
      aliases: `{"Agent Orange",Braincell,C-Blast,Cerebus,"Crushed Insect","DJ Mystiska K",Fred,"Kari Pekka",Magenta,Mentap,"Mr. James Barth","Mystic Letter K","Phunkey Rhythm Doctor",Rotortype,Rubberneck,"Shape Changer","Sir Jeremy Augustus Hutley Of Granith Hall","Szerementa Programs","The Mantis (2)",Vector,Yakari}`
    })
  );
};
