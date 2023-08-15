// // setInterval
// console.log("script started")

// // setInterval("iii", 2000) 
// // setInterval(()=>{
// //     console.log(Math.random()*100)
// // },2000)

// console.log("scritp end ")

const Body = document.body
const button = document.querySelector("button")
// console.log(button)

const intervalID = setInterval(()=>{
    const red = Math.floor(Math.random()*126)
    const green = Math.floor(Math.random()*126)
    const blue = Math.floor(Math.random()*126)
    const rgb = `rgb(${red}, ${green}, ${blue})`
    // console.log(rgb)
    Body.style.background = rgb;
}, 1000)

button.addEventListener("click",()=>{
    clearInterval(intervalID)
    button.textContent = Body.style.background
})


console.log(intervalID)