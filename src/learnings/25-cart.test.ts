import { describe, expect, it } from 'vitest';

import { subtotal, type CartItem } from './25-cart';

describe('subtotal', () => {
  it('adds price times quantity', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 },
    ] satisfies CartItem[];
    expect(subtotal(items)).toBe(35);
  });
});
