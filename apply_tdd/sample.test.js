const multiply = require('./sample.js');

test('Testing multiplication - normal test', () => {
	expect(24).toBe(multiply.multipliesNumbers(3, 7));
});
