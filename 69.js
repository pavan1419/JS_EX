// clone using object.assign

const obj ={
    key1 : "val1",
    key2 : "val2"
}

// const obj1 = {...obj}
const obj1 = Object.assign({}, obj)
obj.key3 = "val3"
console.log(obj)
console.log(obj1)
