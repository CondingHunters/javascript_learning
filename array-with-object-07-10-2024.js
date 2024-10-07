/*const array = [
  { first: [{ name: "bhushan", age: "29" }] },
  { second: [{ name: "sourabh", age: "25" }] },
  { third: [{ name: "abhi", age: "22" }] },
];*/
const array = [
  {
    persons: [
      { name: "bhushan", age: "29" },
      { name: "sourabh", age: "25" },
      { name: "abhi", age: "22" },
    ],
    fruits: [
      { name: "Apple" },
      { name: "Mango" },
      { name: "Orange" },
      { fruitName: "Leamon" },
    ],
  },
];
const printNameValue = (valueToPrint) => {
  console.log(valueToPrint);
};
const data = array.map((item) => {
  /*if (index == 0) {
    console.log(item.first[0].name);
  }
  if (index == 1) {
    console.log(item.second[0].name);
  }
  if (index == 2) {
    console.log(item.third[0].name);
  }*/
  //console.log(item.person[0].name);

  /*item.persons.map((person) => {
    console.log(person.name);
  });
  item.other.map((person) => {
    console.log(person.name);
  });*/
  Object.keys(item).map((objectKey) => {
    item[objectKey].map((objectKeyValue, objectKeyValueIndex) => {
      if (objectKey == "fruits") {
        if (objectKeyValueIndex === 3) {
          printNameValue(objectKeyValue.fruitName);
        } else {
          printNameValue(objectKeyValue.name);
        }
      } else {
        printNameValue(objectKeyValue.name);
      }
    });
  });
});
