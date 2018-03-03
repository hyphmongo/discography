import {sanitizeAndSplit} from '../src/utils';

test('Should split string into array', () => {
  expect(sanitizeAndSplit('{"One","Two","Three"}')).toEqual(['One', 'Two', 'Three']);
  expect(sanitizeAndSplit('{"One","Tw,o","Three"}')).toEqual(['One', 'Tw,o', 'Three']);
  expect(sanitizeAndSplit('{"One One","Two",Three}')).toEqual(['One One', 'Two', 'Three']);
  expect(sanitizeAndSplit('{"One\'s","Two",Three}')).toEqual(["One's", 'Two', 'Three']);
  expect(sanitizeAndSplit('{"One\'s","Two",Three}')).toEqual(["One's", 'Two', 'Three']);
  expect(sanitizeAndSplit(['One', 'Two', 'Three'])).toEqual(['One', 'Two', 'Three']);
});
