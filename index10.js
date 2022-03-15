// ARROW FUNCTION


//CREATING A REGULAR FUNCTION

const harry=function(){
    console.log("This is the best person")
}

harry()


//CONVERTING IT INTO AN ARROW FUNCTION
const harry=()=>{
    console.log('This is the best person')
}

harry()

//Function returning something
const greet=function(){
    return "Good Morning"
}

//one liner do not require braces ,it will automatically return value

const greet=()=>"good morning"


const greet=(name,ending)=>"good morning"+ name+ ending;
console.log(greet("Harry","bye"))