//Generators in JavaScript
//1-1B

function* numbersGen(){
    let i=0;


    //yield 1;
    //yield 2;
    //yield 3;
    //yield 4;
    while(true){
        // 67 seconds
        yield i++;
        // yield (i++).toString();
    }
}

const gen=numberGen();
console.log(gen.next().value)
console.log(gen.next().value)