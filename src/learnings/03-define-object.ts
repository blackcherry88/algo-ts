type Product = {
    name: string;
    price: number;
    discount?: number; // Optional property
};

function labelProduct(product: Product) {
    const suffix = product.discount? ` (${product.discount}% off)` : '';
    return `${product.name}: $${product.price.toFixed(2)}${suffix}`;
}

const product1 = { name: 'Laptop', price: 999.99, discount: 10 };
console.log(labelProduct(product1)); // Output: Laptop: $999.99 (10% off)

const product2 = { name: 'Mouse', price: 25.5 };
console.log(labelProduct(product2)); // Output: Mouse: $25.50