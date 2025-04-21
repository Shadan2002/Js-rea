//const user=new Object()====this is singleton object
const user={}//this non singleton object

user.name="khan"
user.age=23

//console.log(user)
const regname={
    email:"khajak@gaa",
    Fullname:{
        username:{
       name:"kjkda",
       lastname:"khan"
        }
        
    }
}
//console.log(regname.Fullname.username)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"d"}
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3)

const userss=[
    {
        id:1,
        email:"akndakn@gmail"
    },{
        id:1,
        email:"akndakn@gmail"
    },
    {
        id:1,
        email:"akndakn@gmail"
    }
]//jab data database sae aaye gaye toa array of object aaye gaa
 const course={
    couresname:"Javascript",
    price:1000,
    Teacher:"shadan"
 }
 //course.Teacher
const {Teacher}=course
console.log(Teacher)