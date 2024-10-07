let array = [
  { name: "Abhishek", age: 22 },
  { name: "Sourabh", age: 25 },
  { name: "Bhushan", age: 29 },
];

/*let anotherArray = array.map((item) => {
  //console.log("item is: ", item);
  return item.name;
});*/
let anotherArray = [];

for (let index = 0; index < array.length; index++) {
  anotherArray.push(array[index].name)  
}

console.log("anotherArray is: ", anotherArray);
