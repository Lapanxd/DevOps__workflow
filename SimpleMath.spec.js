const SimpleMath = require('./SimpleMath');

test('adds 1 + 2 to equal 3', () => {
  expect(SimpleMath.addition(1, 2)).toBe(3);
});
  
test('soustrait 5 - 3 to equals 2', () => {
  expect(SimpleMath.soustraction(5, 3)).toBe(2);
});
