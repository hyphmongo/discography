import testSnapshot from './fixtures/testSnapshot';

test('Should have all basic fields on the label type', async () => {
  const query = `
    query {
      lookup {
        label (id: 1) {
          id
          name
          contactInfo
          profile
          urls
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should implement the label-release connection', async () => {
  const query = `
    query {
      lookup {
        label (id: 1) {
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

test('Should get sub labels', async () => {
  const query = `
    query {
      lookup {
        label (id: 1) {
          subLabels {
            id
            name
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});

test('Should get parent label', async () => {
  const query = `
    query {
      lookup {
        label (id: 123456) {
          parentLabel {
            id
          }
        }
      }
    }
  `;

  await testSnapshot(query);
});
