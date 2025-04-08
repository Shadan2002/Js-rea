//primitive
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt


const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId)
const BigInt= 123456789009876543n
//Referance(non primitive)
//Array,Object,Function
const heros=["salman",'srk','amir']//array
let myObject={
    name:"khan",
    age:23,
}

const myFunction=function(){
    console.log("hello world")
}
// ####################################################33
//stack(primitive),Heap(non primitive)
let myname="shadan ahmad khan"
let newname=myname
newname="khan"
console.log(newname)
console.log(myname)

let userOne={
    email:"khan@hjns",
    upi: "569@ybl"
}
let userTwo=userOne
userTwo.email="ahmad@gmai"
console.log(userOne.email);
console.log(userTwo.email); 
