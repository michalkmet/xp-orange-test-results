const testsResults = require('./testsResults');

describe('Story 1: marks average', () => {
  it('UAT1.1: When the marks are [9,9,9] Then I Should see 9.0', () => {
    expect(testsResults([9, 9, 9])).toBe(9.0);
  });
  it('UAT1.2: When the marks are [5,6,7] Then I Should see 6.0', () => {
    expect(testsResults([5, 6, 7])).toBe(6.0);
  });
});
