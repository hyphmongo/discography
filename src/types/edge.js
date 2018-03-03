import {GraphQLString, GraphQLObjectType} from 'graphql';
import {base64Encode, splitCamel} from '../utils';

export default function createEdgeType(type, name) {
  return new GraphQLObjectType({
    description: `${splitCamel(name)} edge`,
    name: `${name}Edge`,
    fields: () => ({
      node: {
        description: 'Entity at the end of the connection',
        type,
        resolve: source => source
      },
      cursor: {
        description: 'Identifier used in pagination',
        type: GraphQLString,
        resolve: source => base64Encode(source.id || source.trackno)
      }
    })
  });
}
