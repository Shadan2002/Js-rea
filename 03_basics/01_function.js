function Name(){
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("D")
    console.log("A")
    console.log("N")
}
//Name()
// function addNumber(num1,num2){
//     console.log(num1+num2)
// }
function addNumber(num1,num2){
    //     let result =num1+num2
    //  return result
    return num1+num2
    }
    const result =addNumber(4,6)
//console.log("Result:",result)
function loginuserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}

//console.log(loginuserMessage("khan"))
//console.log(loginuserMessage(" "))

function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(200,33,43))
//(...) these three dots is called rest operator in fucton rest opert pass multiple value

const user={
    name:"shadan",
    tag:123

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.tag}`)

}

//handleObject(user)
handleObject({
    name:"shadan",
    tag:123
})

const newarr=[123,23,432]

function returnarray(anyarr){
    return anyarr[2]

}
console.log(returnarray(newarr))