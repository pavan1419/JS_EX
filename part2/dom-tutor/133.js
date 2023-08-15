// callbacks 

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

setTimeout(()=>{
    heading1.textContent = "heading one "
    heading1.style.color = "yellow "

    setTimeout(()=>{
        heading2.textContent = "heading two "
        heading2.style.color = "purple "
        
        setTimeout(()=>{
            heading3.textContent = "heading three "
            heading3.style.color = "red"

        setTimeout(()=>{
            heading4.textContent = "heading four "
            heading4.style.color = "pink"

            
        setTimeout(()=>{
            heading5.textContent = "heading five "
            heading5.style.color = "cyan"

            
        setTimeout(()=>{
            heading6.textContent = "heading 6 "
            heading6.style.color = "blue"

            setTimeout(()=>{
                heading7.textContent = "heading 7 "
                heading7.style.color = "voilet"
    
            },1000)

        },3000)

        },2000)

        },1000)

        },2000)
    
    },2000)
    
    
},1000)
