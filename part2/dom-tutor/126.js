const MainBtn = document.querySelector("button")
const Body = document.body
const currentcolor = document.querySelector(".currant-color")


function randomColorGenerator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor
}

MainBtn.addEventListener("click", ()=>{
const randomColor = randomColorGenerator()
Body.style.backgroundColor = randomColor
currentcolor.textContent = randomColor
})

