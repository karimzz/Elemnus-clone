
// Start Animation


let cart = document.querySelectorAll(".cart") ; 
console.log(cart) ;  

let flow  = document.querySelector(".flow" ) ; 


// cart.onmouseover  = ()=>{
//     cart.style.cssText = "background: #f2f5f7;" ; 
//     flow.style.cssText = "left : 10px" ; 
// }


cart.forEach((element)=>{
    element.addEventListener("mouseover" , (e)=>{
        element.style.cssText = "background: #f2f5f7;" ; 
        element.querySelector(".flow").style.cssText = "left:  10px" ; 
})
})


cart.forEach((element)=>{
    element.addEventListener("mouseleave" , (e)=>{
        element.style.cssText = "background: transparent;" ; 
        element.querySelector(".flow").style.cssText = "left:  -100%" ; 
})
})


// cart.onmouseleave = ()=>{
//     cart.style.cssText = "background: trasnparent;" ; 
//     flow.style.cssText = "left : -100%" ; 
// }


// End Animation


// Start Overlay

let overlay = document.querySelector(" .k-overlay") ;
let login  = document.querySelector(".login") ; 
let sign = document.querySelector(".signup") ; 
console.log(sign)  ; 

document.addEventListener( "click" ,  (e)=>{
    if(e.target.classList.contains("k-overlay"))
    {
        e.target.classList.remove("show" ) ; 
        login.classList.remove("show") ; 
        sign.classList.remove("show")
    }
})


let btnLogin  = document.querySelector(".log") ; 

btnLogin.addEventListener("click" , ()=>{
    overlay.classList.add('show') ; 
    login.classList.add("show" ) ; 
})


let btnSign = document.querySelector(".sign") ; 
console.log(btnSign) ; 

btnSign.addEventListener("click" , ()=>{
    overlay.classList.add("show")
    sign.classList.add("show") ; 
})



// End Overlay


//Start Save Picture Of Re staurant To make cart


let carts = document.querySelectorAll(".cart") ; 

let restuarntProfile  ; 




carts.forEach((element)=>{

    element.addEventListener("click" , (e)=>{

        localStorage.setItem("src" , `${element.querySelector(".logo img").src}`)
        localStorage.setItem("head" , `${element.querySelector(".detail .left .des h4").innerHTML}`)
        localStorage.setItem('background' , `${element.querySelector(".image img").src}`)
       

    })
})


//End Save Picture Of Re staurant To make cart




// Start To Chnage Cart


let car = document.querySelectorAll(".cart") ;

car.forEach((element)=>{
    element.addEventListener("click" ,()=>{
        location.replace("./cart.html") ; 
    })
})

// End To Chnage Cart

