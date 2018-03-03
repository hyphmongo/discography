import testSnapshot from './fixtures/testSnapshot';

test('Should search for artist', async () => {
  const query = `
    query {
      search {
        artist (name: "Joy Orbison", first: 1) {
          edges {
            node {
              id
            }
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalReturned
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should search for release', async () => {
  const query = `
    query {
      search {
        release (title: "Hyph Mngo", first: 1, after: "MTk2Njc3OQ==") {
          edges {
            node {
              id
            }
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalReturned
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should search for label', async () => {
  const query = `
    query {
      search {
        label (name: "Hotflush", first: 1) {
          edges {
            node {
              id
            }
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalReturned
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should search for master release', async () => {
  const query = `
    query {
      search {
        master (title: "Hyph Mngo", first: 1) {
          edges {
            node {
              id
            }
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalReturned
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should apply more complex search query parameters', async () => {
  const query = `
    query {
      search {
        release(styles: "Deep House", released: "1992", country: "US", first: 3) {
          edges {
            node {
              id
              title
              styles
              released
              country
            }
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});
