let impArray=['aadak','pyaz','bhindi']


//Add a key-value pair inside local storage
localStorage.setItem('Name','Harry')
localStorage.setItem('Name2','Rohan')
localStorage.setItem('Sabzi',JSON.stringify(imArray));


//Clears the entire local storage
//localStorage.clear()


//Clear a particular key-value pair
//localStorage.removeItem('Name2')


//Retrieve an item from the local Storage
let name=localStorage.getItem('Name')
name=JSON.parse(localStorage.getItem('Sabzi'))
console.log(name)

sessionStorage.setItem('sessionName','sHarry')
sessionStorage.setItem('sessionName2','sRohan')
sessionStorage.setItem('sessionSabzi',JSON.stringify(impArray))