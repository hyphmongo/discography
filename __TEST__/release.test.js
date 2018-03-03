import testSnapshot from './fixtures/testSnapshot';

test('Should have all basic fields on the release type', async () => {
  const query = `
    query {
      lookup {
        release (id: 2) {
          id
          title
          country
          released
          genres
          styles
          formats {
            position
            formatName
            quantity
          }
          images {
            type
            height
            width
          }
          master {
            id
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should implement the release artist connection', async () => {
  const query = `
    query {
      lookup {
        release (id: 1) {
          id
          artists (first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should implement the release label connection', async () => {
  const query = `
    query {
      lookup {
        release (id: 1) {
          id
          labels (first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should implement the release track connection', async () => {
  const query = `
    query {
      lookup {
        release (id: 1) {
          id
          tracks (first: 1) {
            edges {
              node {
                trackno
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

test('Should implement the extra artist connection', async () => {
  const query = `
    query {
      lookup {
        release (id: 2) {
          id
          extraArtists (first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});
