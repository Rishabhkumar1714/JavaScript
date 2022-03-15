Async/Await 


console.log("This is for async")

async function harry(){
    return "harry"
}

let a=harry();
console.log(a)// here it will pass a promise in which after resolving it will pass the value.



async function harry(){
    console.log("Inside harry function")
    const response=await fetch("https:dvvhbhbhb");
    console.log("before response")
    const users=await response.json()
    return users;
}

console.log("Before calling harry")
let a=harry()
console.log("After calling harry")
console.log(a)
a.then(data=> console.log(data))
console.log("Last line of this js file")