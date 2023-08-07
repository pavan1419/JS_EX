//for loop for array

let arr1 = ["i1","i2","i3","i4"]
// for(let i = 0;i<=9;i++)
// {
//     console.log(i)
// }

// console.log(arr1.length)
// console.log(arr1[3])
// console.log(arr1[arr1.length-1])
let arr2 =[]
for(let i  = 0;i<arr1.length;i++)
{
    console.log(arr1[i])
    arr2.push(arr1[i].toUpperCase())
}
console.log(arr1)
console.log(arr2)