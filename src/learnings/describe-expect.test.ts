import { expect, describe, it } from 'vitest';

describe('simple test suite', () => {
  it('should pass', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('another test suite', () => {
  it('should also pass', () => {
    expect('hello'.toUpperCase()).toBe('HELLO');
  });
});
