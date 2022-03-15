//Destructuring

let a,b
[a,b]=[41,45];
console.log(a,b);


[a,b,c, ...d]=[1,12,14,15,15,85,65,45,85,25]
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//first three values will be stored inside the a,b,c and then rest values will be stored inside the d as an array.


//Array Destructing
({a,b,c,...d}={a:45,b:58,c:78,d:54,e:58})
console.log(a,b,c,d)

const fruits=['Apple','Bananas','Mangoes']
[a,b,c]=fruits
console.log(a,b,c)


//Object Destructuring
const laptop={
    model:"HP Pavilion",
    age:"54 days",
    gender:"Male",
    net:454,
    start:function(){console.log("started")}
}

const {model,age,gender,net,start}=laptop
console.log(model,age,gender,net,start)
start()
