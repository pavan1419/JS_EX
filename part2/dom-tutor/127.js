// keypress event 
// mousehover event 

const Body = document.body

// Body.addEventListener("keypress",(e)=>{
// console.log(e.key)
// })

const btn = document.querySelector(".btn")
btn.addEventListener("mouseover",()=>{
    console.log("mouse over event ")
    })

    
btn.addEventListener("mouseleave",()=>{
    console.log("leave over event ")
    })