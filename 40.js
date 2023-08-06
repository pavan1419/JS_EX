const arr1 = [1,2,3]
const arr2 = [5,6,7]

const newArr1 = [...arr1,..."abc"]
console.log(newArr1)


const obj1 = {
    v1 : "1",
    v2 : "2"

}
const obj2 = {
    v3: "3",
    v4 : "4",
    v1 : "44"
}

// const newObj = {...obj2,...obj1}
const newObj = {...obj2,...obj1,v5 : "55"}

console.log(newObj)