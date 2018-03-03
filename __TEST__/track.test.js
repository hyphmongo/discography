import testSnapshot from './fixtures/testSnapshot';

test('Should implement tracks artist connection', async () => {
  const query = `
    query {
      lookup {
        release(id: 3) {
          tracks (first: 1) {
            edges {
              node {
                trackno
                title
                artists {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should implement the track extra artist connection', async () => {
  const query = `
    query {
      lookup {
        release(id: 3) {
          tracks (first: 3) {
            edges {
              node {
                title
                trackno
                extraArtists {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should paginate tracks by their track number', async () => {
  const query = `
    query {
      lookup {
        release(id: 1) {
          tracks (first:1, after:"MQ==") {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                title
                trackno
              }
              cursor
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});
