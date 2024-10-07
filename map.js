let array = [
  { name: "Abhishek", age: 22 },
  { name: "Sourabh", age: 25 },
  { name: "Bhushan", age: 29 },
];

let callBackFn = (item) => {
  return item.name
}

let anotherArray = array.map(callBackFn);

/*let anotherArray = [];

for (let index = 0; index < array.length; index++) {
  anotherArray.push(array[index].name)  
}*/

console.log("anotherArray is: ", anotherArray);
