const testsResults = require('./testsResults');

describe('testsResults', () => {
  it('should return hello', () => {
    expect(testsResults()).toBe('hello');
  });
});
