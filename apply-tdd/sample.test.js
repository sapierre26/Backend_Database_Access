const multiply = require('./sample.js');

test('Test multiplication - normal case', () => {
	expect(24).toBe(multiply.multiplyNumbers(3, 7));
});
