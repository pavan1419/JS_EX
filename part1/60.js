// sort methode 

const a = [1,8,99,23,97,23]
a.sort()
console.log(a)

const char = ["p", "b", "c", "e",]
char.sort()
console.log(char)


const no1 =[2,34,57,233,57,22]
const ans =  no1.sort((a,b)=>{
    return a-b
})

console.log(no1)


const proucts = [
    {ProId : 1 , ProName : "tv", ProPrice : 23000},
    {ProId : 2 , ProName : "laptop", ProPrice : 232000},
    {ProId : 3 , ProName : "mobile", ProPrice : 13000},
    {ProId : 4 , ProName : "oven", ProPrice : 5000}

]

const sortPrice = proucts.sort((a,b )=>{
    return b.ProPrice-a.ProPrice
})
console.log(sortPrice)