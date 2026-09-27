type DiscountStrategy = (price: number) => number;

function checkout(price: number, discount: DiscountStrategy): number {
    return discount(price);
}

const tenPercentDiscount: DiscountStrategy = (price) => price * 0.9;
const fixedDiscount: DiscountStrategy = (price) => price - 5;

console.log(checkout(100, tenPercentDiscount)); // Output: 90
console.log(checkout(100, fixedDiscount)); // Output: 95

function stackDiscounts(prices: number[], ...discounts: DiscountStrategy[]): number[] {
    return prices.map(price => {
        return discounts.reduce((currentPrice, discount) => discount(currentPrice), price);
    });
}

const checkoutPrices = [100, 200, 300];
const finalPrices = stackDiscounts(checkoutPrices, tenPercentDiscount, fixedDiscount);
console.log(finalPrices); // Output: [85, 175, 265] 
