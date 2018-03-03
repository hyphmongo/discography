import testSnapshot from './fixtures/testSnapshot';

test('Shoulds have all basic fields on the artist type', async () => {
  const query = `
    query {
      lookup {
        artist (id: 1) {
          id
          name
          realName
          aliases
          urls
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should implement the artist-release connection', async () => {
  const query = `
    query {
      lookup {
        artist (id: 1) {
          id
          releases (first: 1) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});
