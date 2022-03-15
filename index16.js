console.log("this is for the iterators")
//Iterators


function fruitsIterator(values){
    let nextIndex=0;
    // we will return an object
    return{
        next:function(){
            if (nextIndex < values.length){
                // we will return an object
                return{
                    values:values[nextIndex++],
                    done:false
                }
            }
        
        else{
            // We will return below object with only done
            return {
                done:true
            }}
        }
    }
}

const myArray=['Apples','Grapes','Oranges','Bhindi'];
console.log("My array is",myArray)


//Using the iterator

const fruits=fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)

