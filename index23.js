//Regular expression and related function
let reg=/harry/;  //This is a regular expression literal in js
reg=/harry/i;//i means case sensitive


console.log(reg)
console.log(reg.source)

let s="This is great code with harry and also harry bhai"

//Functions to match expression

//1. exec()--This function will return an array for match or null for no match

let result=reg.exec(s)
result=reg.exec(s)
console.log(result)
result=reg.exec(s)
console.log(result)//-->We can use multiple exec with global flag


if(result){
    console.log(result)
    console.log(result.input)
    console.log(result.index)
}

2.) test()--Returns true or false
let results