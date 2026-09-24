// const taxRate: number = 0.2;
const taxRate = 0.2;

function total(price: number, quantity: number): number {
  return price * quantity * (1 + taxRate);
}

// function total(price: number, quantity: number) {
//   return price * quantity * (1 + taxRate);
// }

const price = 100;
const quantity = 5;

console.log(`Total price for ${quantity} items at $${price} each (including tax): $${total(price, quantity)}`); // Output: Total price for 5 items at $100 each (including tax): $600
