// every Method 
const no = [2,4,6,5,6]


const ans = no.every((a)=>{return a%2===0})

console.log(ans)


const product  =[
    {ProId : 1 , Name : "tv", ProPrice : 3000 },
    {ProId : 2 , Name : "laptop", ProPrice : 25000 },
    {ProId : 3 , Name : "phone", ProPrice : 13000 },
    {ProId : 4 , Name : "table", ProPrice : 500 }

]

// function Check30K(a){
//     return a.ProPrice <= 30000
// }

const ans1  = product.every(Check30K=(a)=>{
    return a.ProPrice <= 30000
})

console.log(ans1)