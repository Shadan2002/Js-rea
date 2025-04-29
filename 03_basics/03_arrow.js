const user={
    username:"shadan",
    age:22,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website `)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="khan"
// user.welcomeMessage()
//console.log(this)

// function hi(){
//     let username="kkkkk"
//     console.log(this.username)
// }
// hi()

// const hi=function(){
//     let username="ahmad"
//     console.log(this.username)
// }

// const hi=()=>{
//          let username="ahmad"
//          console.log(this.username)
//     }

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }//these are called explistve return
const addtwo=(num1,num2)=>  num1+num2 //implisitive return or yu can write also
const addtwonum=(num1,num2)=>  (num1+num2)
const add=(num1,num2)=>  ({username:"khan"})//return object


console.log(addtwo(2,3))