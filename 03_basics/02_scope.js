//var c=300
let a=300



if(true){
    let a=10
    const b=90
    //console.log("Inner:",a)
    //var c=89

}
//console.log(a)
//console.log(b)
//console.log(c)
function one(){
    const username="khan"
    function two(){
        const website="youtube"
        //console.log(username)
    }
    //console.log(website) it will not run
    //two() //if we comment this line then nothing will run beacuse firt one() is calling and then two()

}
//one()

if(true){
    const username="shadan"
    if(username==="shadan"){
        const website=" youtube"
        //console.log(username+website)
    }
   // console.log(website)//it will show error beacuse website is local scope
}
//console.log(username) same line 34


//++++++++++++++++++++++++++++++++interesting
console.log(addone(3))//it will run
 function addone(num){
return num+1

 }
 addone(3)
 //addtwo(4) error aaye gaa
const addtwo=function(num){
    return num+2
}
addtwo(4)