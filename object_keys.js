let personOne = {
    name: "abhishek",
    age: 22,
    hobby: "programming",
}

// Object.keys(personOne) will return this => ['name', 'age', 'hobby']
let dummyArray = Object.keys(personOne).map((item, index) =>{
    return item
});

//dummyArray will look like this => ['name', 'age', 'hobby']
// console.log("dummyArray is: ", dummyArray)

let testArray = dummyArray.map(item => {
    console.log("item in dummyArray is: ", item)
})

