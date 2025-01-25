const myFunctions = require('./numbers.js');

test('div() - normal test', () => {
  const target = 30;
  const result = myFunctions.div(120, 4);
  expect(target).toBe(result);
});

test('div() - b = 0', () => {
  const target = Infinity;
  const result = myFunctions.div(4, 0);
  expect(target).toBe(result);
});

test('div() - resulting in decimal points', () => {
  const target = 7.25;
  const result = myFunctions.div(14.5, 2);
  expect(target).toBe(result);
});

test('containsNumbers() - normal test', () => {
  const target = 30;
  const result = myFunctions.div(120, 4);
  expect(target).toBe(result);
});
