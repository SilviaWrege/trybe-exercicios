const sum = require('./script');
 
describe('requisito 1',() => {

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

});