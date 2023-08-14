// for id we use # initial

const btn1 =  document.querySelector("#one")

console.log(btn1)

btn1.addEventListener("click" , function(){
    console.log("hii event btn 1")
})


//adding event to all buttons  ------------ (1)

// const allbtn = document.querySelector(".my-btn")

// allbtn.addEventListener("click" , function(){
//     console.log("all working ")
// })


// second type

const allbtn = document.querySelectorAll(".my-btn")

for(let btn of allbtn){
    btn.addEventListener("click", function(){
        console.log(this)
    })
}