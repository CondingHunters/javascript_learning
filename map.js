let array = [
  { name: "Abhishek", age: 22 },
  { name: "Sourabh", age: 25 },
  { name: "Bhushan", age: 29 },
];

let anotherArray = array.map((item) => {
  //console.log("item is: ", item);
  return item.name;
});

console.log("anotherArray is: ", anotherArray);
