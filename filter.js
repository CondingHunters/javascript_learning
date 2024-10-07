let array = [
  { name: "Abhishek", age: 22 },
  { name: "Sourabh", age: 25 },
  { name: "Bhushan", age: 29 },
];

/*let filteredArray = array.filter((item) => {
  if (item.age > 22) return true;
  else return false
});
console.log("filteredArray is: ", filteredArray);*/

for (let index = 0; index < array.length; index++) {
  if (array[index].age <= 22){
    array.splice(index, 1)  
  } 
}

console.log("array is: ", array);
