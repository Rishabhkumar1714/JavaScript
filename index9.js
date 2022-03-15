const mygreet=function(name,thank='Thank you'){
let msg=`Happy brithday ${name},how i wish to fly,${thank}!`
return msg;

}
let name="skillf";
let name="rohan"


let val=mygreet(name,"Thank a lot")
console.log(val)


const myobj={
    name:"Skillf",
    game:function(){
        return "GTA"
    }
}

console.log(myobj.game())