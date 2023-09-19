const testsResults = require('./testsResults');

describe('Story 1: marks average', () => {
  it('UAT1.1: When the marks are [9,9,9] Then I Should see 9.000', () => {
    expect(testsResults([9, 9, 9])).toBe(9.0);
  });
  it('UAT1.2: When the marks are [5,6,7] Then I Should see 6.000', () => {
    expect(testsResults([5, 6, 7])).toBe(6.0);
  });
  it('UAT1.3: When the marks are [5,8,10] Then I Should see 7.667', () => {
    expect(testsResults([5, 8, 10])).toBe(7.667);
  });
  it('UAT1.4: When the marks are [8,4,9] Then I Should see 7.000', () => {
    expect(testsResults([8, 4, 9])).toBe(7.0);
  });
  it('UAT1.5: When the marks are [2,5,10] Then I Should see 5.667', () => {
    expect(testsResults([2, 5, 10])).toBe(5.667);
  });
});
