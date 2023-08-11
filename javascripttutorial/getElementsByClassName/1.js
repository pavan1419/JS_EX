let items  = document.getElementsByClassName('item')
let menu = document.getElementById('menu')

let data = [].map.call(items, item => item.textContent)

console.log(data)