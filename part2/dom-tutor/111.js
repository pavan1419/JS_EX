const rootNode = document.getRootNode()
const htmlElementNode = rootNode.childNodes[0]

// console.log(rootNode.childNodes) 
// console.log(htmlElementNode.childNodes)

const head = htmlElementNode.childNodes[0]
const text = htmlElementNode.childNodes[1]
const body = htmlElementNode.childNodes[2]

console.log(head)
console.log(body)
console.log(text)