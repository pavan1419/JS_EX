// loop
// get multiple elements using getelemensts by class name 
// get multiple elemensts using queryselectorall 


// let navItems =  document.getElementsByTagName("a") // html collection
// console.log(navItems)
// console.log(Array.isArray(navItems))

// for Loop 

// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "black"
//     navItem.style.fontWeight = "bold"
    
    
// }

// // for of loop
// for(let navItem of navItems){
//         navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "black"
//     navItem.style.fontWeight = "bold"
// }


// for each loop we cannot use 

// navItems = Array.from(navItems)
// console.log(typeof navItems, Array.isArray(navItems))

// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "black"
//         navItem.style.fontWeight = "bold"
// });

// const navitems = document.querySelectorAll(".nav-item")
// console.log(navitems[0]) 



let navItems =  document.querySelectorAll("a")
console.log(navItems)

//for loop 

// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#aaa"
//     navItem.style.color = "black"
//     navItem.style.fontWeight = "bold"
// }


// for of loop
// for(let navItem of navItems){
//         navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "black"
//     navItem.style.fontWeight = "bold"
// }


console.log(typeof navItems, Array.isArray(navItems))

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff"
    navItem.style.color = "black"
        navItem.style.fontWeight = "bold"
});