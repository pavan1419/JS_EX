// intro to Event
// click 
// three types of adding event 
// type 1 =  adding onclick and js code inside html tag     

// type 2 -
// const btn = document.querySelector(".btn")
// console.dir(btn)
// btn.onclick = function(){
// console.log('hihjfjf')
// }



const btn = document.querySelector(".btn") 

// const  clickem = function(){
//     console.log('hihjfjf')
//     }
btn.addEventListener("click", ()=>{
    console.log("hii baby")
})