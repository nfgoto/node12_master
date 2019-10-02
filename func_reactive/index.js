import faker from "faker";

function getRandomProduct() {
  return {
    name: faker.commerce.product(),
    prices: [
      +faker.commerce.price(25, 100),
      +faker.commerce.price(15, 100),
      +faker.commerce.price(35, 100)
    ],
    inStock: faker.random.boolean()
  };
}

function generateRandomProducts(amount) {
  return new Array(amount).fill(null).map(p => getRandomProduct());
}

function getInStockProducts(products) {
  return products.filter(product => product.inStock === true);
}

function findAverageProductPrice(products) {
  const prices = products.map(product => product.prices).flat();
  return Math.round(
    prices.reduce((acc, price) => acc + price, 0) / prices.length
  );
}

const products = generateRandomProducts(5);
console.log(products);
console.log(
  `Average price for products in stock: ${findAverageProductPrice(
    getInStockProducts(products)
  )}`
);
