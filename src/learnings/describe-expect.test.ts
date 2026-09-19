import { expect, describe, it } from 'vitest';

describe('simple test suite', () => {
  it('should pass', () => {
    expect(1 + 1).toBe(2);
  });

  it('should fail', () => {
    expect(1 + 1).toBe(3);
  });
});

describe('another test suite', () => {
  it('should also pass', () => {
    expect('hello'.toUpperCase()).toBe('HELLO');
  });
});
