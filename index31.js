//Metacharacters

let regex=/harry/;
//Lets look into some metacharacter symbols
regex=/^harry/ // ^ means expression will match if string starts with

let str="harry is a good boy and harry is code with harry"

let result=regex.exec(str);
console.log("The result from exec is",result)

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)

}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)
}