//FETCH API
//getData and postData


function getData(){
    console.log("Started getData")
    url="harry.txt"
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.text()
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}

console.log("Before running getData")
getData()
console.log("After running getData")


//postData
function postData(){
    url="http:jvsjvsvshjvhvh"
    data='{"name":"test","salary":"123","age":23}'
    params={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    })
}

postData()

