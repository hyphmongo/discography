import testSnapshot from './fixtures/testSnapshot';

test('Should return all fields on extra artist type', async () => {
  const query = `
   query {
     lookup {
        release (id: 2) {
          id
          extraArtists {
            edges {
              node {
                id
                name
                realName
                aliases
                urls
                role
              }
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});
