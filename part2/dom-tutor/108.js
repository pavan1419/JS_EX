// get multiple elements using getelemensts by class name 
// get multiple elemensts using queryselectorall 


const navItems =  document.getElementsByClassName("nav-item")
console.log(Array.isArray(navItems))


const navitems = document.querySelectorAll(".nav-item")
console.log(navitems[0]) 