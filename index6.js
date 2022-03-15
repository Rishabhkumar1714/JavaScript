let marks=[23,25,45,65,75]
const fruits=['Orange','Apple','Banana']
const mixed=['str',58,[55,64]]

const arr=new Array(21,25,14,'Orange')
console.log(marks)
console.log(mixed)
console.log(fruits[1])


console.log(arr.length)
console.log(Array.isArray('dfdf'))
arr[0]='harry'
let arrelement=arr[0]
console.log('element:',arrelement)
console.log(arr)


let value=marks.indexOf(47)
console.log(value)


//Mutating or Modifing Arrays
marks.push(3456)
marks.unshift(109)
marks.pop()
marks.shift()
marks.splice(2,3)
marks.reverse()
let marks2=[1,25,54,12]
marks=marks.concat(marks2)
console.log(marks)

let myObj={
    name:'harry',
    channel:'Codewithharry',
    isActive:true,
    marks:[12,25,45,14]
}
console.log(myObj)