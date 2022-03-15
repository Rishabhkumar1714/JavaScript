//For of loop vs For in loop

people=['Harry',"Rohan","SkillF","Shubham","Vikrant"]

//Traditional for loop

// for(let index=0;index<people.length;index++){
//     const element=people[index]
//     console.log(element)
// }

obj={
    name:"Rishabh",
    lang:"JavaScript",
    hobbies:"Android app development"
}

for(let index=0;index<Object.keys(obj).length;index++){
         const element=obj[Object.keys(obj)[index]]
         console.log(element)

// console.log(obj)


//Iterating an object using for-in loop:

for (let key in obj){
    console.log(obj[key])
}

myString="This is my string"

for(let char in myString){
    console.log(myString[char])
}


people=['Harry',"Rohan","SkillF","Shubham","Vikrant"];

for(let name of people){
    console.log(name)
}


for(let name of myString){
    console.log(name)
}

}