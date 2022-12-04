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


document.querySelector(".btn2").onclick = ()=>{

    location.replace("../offer.html") ; 

}
