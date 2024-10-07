let products = [
  { name: "Mobile", price: 22 },
  { name: "Tablet", price: 25 },
  { name: "Laptop", price: 29 },
];

let totalPrice = products.reduce((acc, item) => {
  return acc += item.price
}, 100)

console.log("total products price is: ", totalPrice);
