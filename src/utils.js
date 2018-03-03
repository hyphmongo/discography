import {flow, isArray, isString} from 'lodash';

const sanitize = input => (isString(input) ? input.replace(/[{}\\]/g, '') : input);
const split = input => (isString(input) ? input.match(/"[^"]*"|[^,]+/g) : input);
const unquote = input => (isArray(input) ? input.map(unquote) : isString(input) && input.replace(/^"(.*)"$/, '$1'));

export const sanitizeAndSplit = input => input && flow(sanitize, split, unquote)(input);

export const base64Encode = value => Buffer.from(value.toString()).toString('base64');
export const base64Decode = value => Buffer.from(value, 'base64').toString();

export const splitCamel = value => {
  return value
    .split(/(?=[A-Z])/)
    .map(s => `${s.charAt(0).toUpperCase()}${s.substr(1)}`)
    .join(' ');
};
