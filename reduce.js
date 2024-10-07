let products = [
  { name: "Mobile", price: 22 },
  { name: "Tablet", price: 25 },
  { name: "Laptop", price: 29 },
];

/*let totalPrice = products.reduce((acc, item) => {
  return acc += item.price
}, 100)*/

let totalPrice = 0;

for (let index = 0; index < products.length; index++) {
  totalPrice += products[index].price  
}
console.log("total products price is: ", totalPrice);
