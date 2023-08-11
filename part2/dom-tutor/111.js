const rootNode = document.getRootNode()
const htmlElementNode = rootNode.childNodes[0]

// console.log(rootNode.childNodes) 
// console.log(htmlElementNode.childNodes)

// child relation 

const head = htmlElementNode.childNodes[0]
const text = htmlElementNode.childNodes[1]
const body = htmlElementNode.childNodes[2]



console.log(head)
console.log(body)

// parent relation 

console.log(text.parentElement)


// siblineg releation

console.log(head.nextSibling)


// ---------------------------------------
const h1 = document.querySelector("h1")
let div  = h1.parentElement

div.style.color = "#333"

div.style.backgroundColor = "#333"