let arr1 = ["i1","i2"]
// let arr2 = ["i1","i2"] 
// let arr2 = arr1.slice(0)
// let arr2 = arr1.slice(0).concat(["i3","i4"]) 
// let arr2 = [].concat(arr1)
// new way
//spread operator (...)
let arr3=["i5","i6"]
let arr2 = [...arr1,...arr3]
// let arr2 = [...arr1, "i3","i4"]
arr1.push("i3")

console.log(arr1===arr2)
console.log(arr1)
console.log(arr2)