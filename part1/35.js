//array destructuring
const Arr1 =["i1","i2","i3",'i4']
// let var1 = Arr1[0]
// let var2 = Arr1[1]


// console.log(Arr1)
// console.log(var1)

//now it is const array is  cahanged to normal variable
//also i can onvert it to const by using const

let [var1 , var2 , ...arr3 ] = Arr1

console.log(var1)
console.log(var2)
console.log(arr3)