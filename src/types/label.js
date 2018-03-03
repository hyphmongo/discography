import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql';

import property from 'lodash/property';
import {LabelRelease} from './connections';
import {sanitizeAndSplit} from '../utils';

const Label = new GraphQLObjectType({
  description:
    'The Label resource represents a label, company, recording studio, location, or other entity involved with Artists and Releases.',
  name: 'Label',
  fields: () => ({
    id: {
      description: 'Unique identifier for the label',
      type: GraphQLInt,
      resolve: property('id')
    },
    name: {
      description: 'Name of the label',
      type: GraphQLString,
      resolve: property('name')
    },
    contactInfo: {
      description: 'Contact information such as phone number or fax',
      type: GraphQLString,
      resolve: property('contactinfo')
    },
    profile: {
      description: 'Short blurb about the label',
      type: GraphQLString,
      resolve: property('profile')
    },
    parentLabel: {
      description: 'Node of the parent label',
      type: Label,
      resolve: (source, args, context) => {
        return (
          source.parent_label && context.loaders.label.load(source.parent_label)
        );
      }
    },
    subLabels: {
      description: 'List of nodes of sub labels',
      type: new GraphQLList(Label),
      resolve: (source, args, context) => {
        return (
          source.sublabels &&
          context.loaders.label.loadMany(sanitizeAndSplit(source.sublabels))
        );
      }
    },
    urls: {
      description: 'List of URLs associated with the label',
      type: new GraphQLList(GraphQLString),
      resolve: source => sanitizeAndSplit(source.urls)
    },
    releases: LabelRelease('LabelRelease')
  })
});

export default Label;
