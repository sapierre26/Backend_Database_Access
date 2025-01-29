const multiply = require('./sample.js');

test('Test multiplication - normal test', () => {
	expect(24).toBe(multiply.multiplyNumbers(3, 8));
});
