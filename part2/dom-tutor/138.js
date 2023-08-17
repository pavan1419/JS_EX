
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")


function changeTextPromise(element , text ,color,  time){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(element){
            element.textContent = text
            element.style.color = color
            resolve()
        }else{
        reject("Element is wrong")}
    
        },time)
    

    })
}

const returnPromise = changeTextPromise(heading1 , "one" , "red" ,2000)
returnPromise.then(()=>{
changeTextPromise(heading2,"two","pink",1000)})
.then(()=>{changeTextPromise(heading3,"three","yellow",2000)})
.then(()=>{changeTextPromise(heading4,"four","blue",1000)})
.then(()=>{changeTextPromise(heading5,"five","green",1000)})
.then(()=>{changeTextPromise(heading6,"six","red",1000)})
.then(()=>{changeTextPromise(heading7,"seven","purple",1000)})
.catch((error)=>{alert(error)})