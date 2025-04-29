//Immediately Invoked function expression(iife)

//global scope saa polution sae problem hoti hai isilye yea use ker tae hai
(function Code(){
    console.log(`DB Connected`)
})();//use ; so iife can understand where to stop


( (name)=>{
    console.log(`DB Connected ${name}`)
}

)("khan")