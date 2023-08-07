//for in loop in arrya
const fruits = ["mango","apple","avacado"]
const fruit2 = []
for (let index in fruits){
    console.log(index)
console.log(fruits[index])
fruit2.push(fruits[index])
}
console.log(fruit2)


for (let i =0 ; i<fruits.length;i++)
{
    console.log(fruits[i])
}