console.log("Mapping")
// Maps in javascript :We can use any type of key or value

const myMap=new Map()
const key1="myStr",key2={},key3=function(){};

//Setting map values
myMap.set(key1,'Thsi is a string')
myMap.set(key2,'This is a blank obj')
myMap.set(key3,'This is a empty function')
console.log(myMap)


// Getting the values from a Map
let value1=myMap.get(key3)
console.log(value1)

//Get the size of the map
console.log(myMap.size)

