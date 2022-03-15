//Asynchronous Programming


console.log("This is tutorial of asynchronous")
 

setTimeout(()=>{
    for(let index=0;index<4000;index++){
        const element=index;
        console.log("This os the index number"+ index)
    }
},100)

console.log("Done printing")