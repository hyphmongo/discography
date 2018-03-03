import testSnapshot from './fixtures/testSnapshot';

test('Should return correct pageInfo when source edge is null', async () => {
  const query = `
    query {
      search {
        artist (name: "DSIKFOIJSDOIFJOISAJDOIJ") {
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

test('Should apply correct pagination when cursor is provided', async () => {
  const query = `
    query {
      search {
        release (title: "hyph mngo", first: 1, after: "MTk2Njc3OQ==") {
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
