// const child = document.querySelector(".child")
// const parent = document.querySelector(".parent")
const grandparent = document.querySelector(".grandparent")

// // capctuding event

// child.addEventListener("click", ()=>{
//     console.log("hii child")
// },   
//  true
// )

// parent.addEventListener("click", ()=>{
//     console.log("hii parent")
// },   
//  true
// )

// grandparent.addEventListener("click", ()=>{
//     console.log("hii grandparent")
// },    
// true
// )

// document.body.addEventListener("click", ()=>{
//     console.log("hii body")
// },    
// true
// )


// // ============================================================
// bubbling 

// child.addEventListener("click", ()=>{
//     console.log("bubbling child")
// })

// parent.addEventListener("click", ()=>{
//     console.log("bubbling parent")
// })

// grandparent.addEventListener("click", ()=>{
//     console.log("bubbling grandparent")
// })

// document.body.addEventListener("click", ()=>{
//     console.log("bubbling body")
// })


// // event delegation

grandparent.addEventListener("click",(e)=>{
console.log(e.target.textContent)
})


grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent)
    },true)
    

