let setBackground = ()=>{
    document.querySelector(".background").style.cssText = `background-image: url("${localStorage.getItem("background")}")` ; 
}


setBackground() ; 



// Start Set Logo

document.querySelector(".restaurant .container .content .logo img" ).src = localStorage.getItem("src") ; 

document.querySelector(".restaurant .container .content .left .head").innerHTML = localStorage.getItem("head") ; 




// Start calculate cart

let count = 0 
let num = 0 

let cart = document.querySelector(".check" ); 

let cont = document.querySelector(".product .price").innerHTML.slice(58 , 60) ;

let product = document.querySelectorAll(".product") ;

let subTotal = document.querySelector(".five .total") ; 
let total = document.querySelector('.final .finalTotal') ; 



product.forEach((elment)=>{
    elment.addEventListener("click" , (e)=>{
        elment.querySelector(".price").innerHTML.slice(100 , 102);

        console.log(elment.querySelector(".price").innerHTML.slice(514 , 516 ))
            count += parseInt(elment.querySelector(".price").innerHTML.slice(514 , 516 )) ;
            num++ ; 
            localStorage.setItem("price" , count) ; 
            localStorage.setItem("num" , num) ; 
            cart.style.cssText = "right: 0 ; "
            subTotal.innerHTML = `${localStorage.getItem("price")} <span class="egp">EGP</span>` ; 
            total.innerHTML = `${parseInt(localStorage.getItem("price"))  + 24.50 + 20.99}`
        
    })
})


console.log(cont)

// End calculate cart




// Start Cart



let closeBtn = document.querySelector(".close-btn") ; 

closeBtn.addEventListener("click" , ()=>{
    cart.style.cssText  = "right : -100%" ; 
    localStorage.setItem("price" , 0)
})







// End Cart
