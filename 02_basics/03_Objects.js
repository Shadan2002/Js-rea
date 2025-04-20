//singleton
//Object.create --it constructor method through is kae andar singleton bandta hai 

//object literal
const mySym=Symbol("key1")
const JsUser={
    name: "shadan",
    "Full name":"shadan Ahmad",//you cannot access through .() method 
    [mySym]:"mykey1",
    age: "23",
 email:"kjaha@gmail",
 islogged: ["MON","Tues"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
//console.log(JsUser[mySym])
JsUser.email="qwer@gama"//change value
//Object.freeze(JsUser)//from this value cannot be change
JsUser.email="Khan@gama"//now email connot be changed
//console.log(JsUser)

//adding function in objects


JsUser.greeting=function(){
    console.log("Hello Js User")
}
JsUser.greeting2=function(){
    console.log(`Hello Js User,${this.name}`)
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greeting2())