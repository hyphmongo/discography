import DataLoader from 'dataloader';
import keyBy from 'lodash/keyBy';
import groupBy from 'lodash/groupBy';

function mapResultsToKey(keys, hashMap) {
  return keys.map(k => hashMap[k] || null);
}

async function loader(db, keys, table, column, keyFn) {
  return mapResultsToKey(
    keys,
    keyFn(
      await db
        .select()
        .from(table)
        .whereIn(column, keys),
      column
    )
  );
}

const loadSingular = (...args) => loader(...args, keyBy);
const loadMany = (...args) => loader(...args, groupBy);

export default function(db) {
  return {
    artist: new DataLoader(keys => loadSingular(db, keys, 'artist', 'id')),
    release: new DataLoader(keys => loadSingular(db, keys, 'release', 'id')),
    master: new DataLoader(keys => loadSingular(db, keys, 'master', 'id')),
    label: new DataLoader(keys => loadSingular(db, keys, 'label', 'name')),
    track: new DataLoader(keys => loadSingular(db, keys, 'track', 'track_id')),
    format: new DataLoader(keys => loadMany(db, keys, 'releases_formats', 'release_id')),
    image: new DataLoader(keys => loadMany(db, keys, 'releases_images', 'release_id'))
  };
}
