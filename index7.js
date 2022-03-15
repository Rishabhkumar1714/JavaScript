console.log('this is tutorial')
const age=65;
const doesDrive=true;
const vari=47;
if(age!=19){
    console.log('Age is not 19')
}
if(age!==45){
    console.log('Age is not 45')
}
else{
    console.log('Age is not 19')
}
if(typeof vari !== 'undefined'){
    console.log('Vari is defined')
}
else{
    console.log('Vari is not defined')
}


if (doseDrive || age>18){
    console.log('You can drive')
}

else{
    console.log('You cannot drive')
}

console.log(age==45? 'Age is 45': 'Age isnot 45')


switch (age){
    case 18:
        console.log('You are 18')
        break;
    case 28:
        console.log('You are 28')
        break;
    case 38:
        console.log("You are 38");
        break;
    default:
        
        console.log('You are unknown age')
        break;
}