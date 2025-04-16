 let mydate=new Date()
//  console.log(mydate.toString())
//  console.log(mydate.toDateString())
//  console.log(mydate.toISOString())
//  console.log(mydate.toLocaleString())


//let myCreatedDate=new Date(2025,0,23)
//let myCreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("01-11-2025")
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
//console.log(Date.now())
let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());


newDate.toLocaleString('default',{

weekday:"long",

 
})