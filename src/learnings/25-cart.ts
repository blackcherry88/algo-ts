export type CartItem = {
  price: number;
  quantity: number;
};

export function subtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
