const testsResults = require('./testsResults');

describe('Story 1: marks average', () => {
  it('UAT1.1: When the marks are [9,9,9] Then I Should see 9.000', () => {
    expect(testsResults([9, 9, 9])).toEqual([9.0, {"a": 0, "h": 3, "l": 0}]);
  });
  it('UAT1.2: When the marks are [5,6,7] Then I Should see 6.000', () => {
    expect(testsResults([5, 6, 7])).toEqual([6.0, {"a": 1, "h": 0, "l": 2}]);
  });
  it('UAT1.3: When the marks are [5,8,10] Then I Should see 7.667', () => {
    expect(testsResults([5, 8, 10])).toEqual([7.667, {"a": 1, "h": 1, "l": 1}]);
  });
  it('UAT1.4: When the marks are [8,4,9] Then I Should see 7.000', () => {
    expect(testsResults([8, 4, 9])).toEqual([7.0, {"a": 1, "h": 1, "l": 1}]);
  });
  it('UAT1.5: When the marks are [2,5,10] Then I Should see 5.667', () => {
    expect(testsResults([2, 5, 10])).toEqual([5.667, {"a": 0, "h": 1, "l": 2}]);
  });
});

describe('Story 2: dictionary/hash with keys "h", "a", "l"', () => {
  it("UAT2.1: When the marks are [1,5,10] Then I Should see[5.333, {'h': 1, 'a': 0, 'l': 2}]", () => {
    expect(testsResults([1, 5, 10])).toEqual([5.333, {'h': 1, 'a': 0, 'l': 2}]);
  });
});
