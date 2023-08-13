const btn =  document.querySelector(".btn")

// btn.addEventListener("click", ()=>{
//     console.log("hii baby")
//     console.log(this)
// })



const  clickem = function(){
    console.log('hihjfjf')
    console.log(this)
    }

    btn.addEventListener("click", clickem)