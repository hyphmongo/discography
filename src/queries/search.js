import {GraphQLObjectType, GraphQLString} from 'graphql';
import {Artist, Label, Release, Master} from '../types';
import {wrapConnection} from '../types/helpers';

const SearchArgs = {
  Artist: ['name'],
  Release: ['title', 'genres', 'styles', 'country', 'released'],
  Label: ['name'],
  Master: ['title', 'genres', 'styles', 'year']
};

function createArgs(type) {
  return type.reduce((args, arg) => {
    args[arg] = {type: GraphQLString};
    return args;
  }, {});
}

function createSearchQuery(type, searchArgs) {
  return wrapConnection({
    type,
    name: `${type}SearchResult`,
    description: `${type.name} search result`,
    args: searchArgs,

    query: (source, context, args) => {
      const query = context.db
        .select()
        .from(type.name.toLowerCase())
        .orderBy('id', 'asc');

      Object.keys(searchArgs)
        .filter(arg => args[arg])
        .forEach(arg => {
          query.whereRaw(`LOWER(${arg.toLowerCase()}) LIKE ?`, [`%${args[arg].toLowerCase()}%`]);
        });

      return query;
    }
  });
}

export default {
  type: new GraphQLObjectType({
    name: 'Search',
    description: 'Search an entity on its name or title',
    fields: () => ({
      artist: createSearchQuery(Artist, createArgs(SearchArgs.Artist)),
      label: createSearchQuery(Label, createArgs(SearchArgs.Label)),
      release: createSearchQuery(Release, createArgs(SearchArgs.Release)),
      master: createSearchQuery(Master, createArgs(SearchArgs.Master))
    })
  }),
  resolve: source => ({})
};
