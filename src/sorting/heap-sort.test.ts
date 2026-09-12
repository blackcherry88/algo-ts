import { describe, expect, it } from 'vitest';
import { heapSort } from './heap-sort';

describe('heapSort', () => {
  it.each([
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [3, 2, 1], expected: [1, 2, 3] },
    {
      input: [64, 34, 25, 12, 22, 11, 90],
      expected: [11, 12, 22, 25, 34, 64, 90],
    },
    { input: [3, -1, 0, 3, -1], expected: [-1, -1, 0, 3, 3] },
  ])('sorts $input into $expected', ({ input, expected }) => {
    expect(heapSort(input)).toEqual(expected);
  });

  it('mutates and returns the original array', () => {
    const input = [2, 1];
    expect(heapSort(input)).toBe(input);
    expect(input).toEqual([1, 2]);
  });

  it('supports a descending comparator', () => {
    expect(heapSort([1, 3, 2], (a, b) => b - a)).toEqual([3, 2, 1]);
  });

  it('sorts objects using a custom comparator', () => {
    const small = { value: 1 };
    const large = { value: 2 };
    expect(heapSort([large, small], (a, b) => a.value - b.value)).toEqual([
      small,
      large,
    ]);
  });

  it('sorts strings with the default comparator', () => {
    expect(heapSort(['pear', 'apple', 'banana'])).toEqual([
      'apple',
      'banana',
      'pear',
    ]);
  });
});
