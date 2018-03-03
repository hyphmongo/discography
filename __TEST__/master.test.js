import testSnapshot from './fixtures/testSnapshot';

test('Should have all basic fields on the master type', async () => {
  const query = `
    query {
      lookup {
        master (id: 18500) {
          id
          title
          year
          genres
          styles
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should implement the master-release connection', async () => {
  const query = `
    query {
      lookup {
        master (id: 18500) {
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
