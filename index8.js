//General loops:for,while,do-while

for(let i=0;i<100;i++){
    console.log(i)
}

let j=110;
while(j<10){
    console.log(j+1)
    j+=1
}


let k=0
do{
    
    if(k===5){
        break
    }
    console.log(k+1)
    k+=1;

}while(k<10)

console.log('done')


let k=0
do{
    
    if(k===5){
        continue;
    }
    console.log(k+1)
    k+=1;

}while(k<10)


let arr=[12,21,23,32,20]
for(let i=0;i<arr.length;i++){
    const element=arr[i];
    console.log(element)
}


// arr.forEach(function(element,index,array){
//     console.log(element,index,array)
// })


let obj={
    name:'Rohan Das',
    age:45,
    type:"Dnagrous Programmer",
    os:'Ubuntu'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}




console.log('done')