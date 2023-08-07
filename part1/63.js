const no = [1,3,5,2,3,4,6]

// function isEven(a){
//     return a%2 === 0
// }

const ans = no.some(isEven=(a)=>{
    return a%2===0
})

console.log(ans)


const product = [
    {ProName : "tv" , ProPrice : 2000},
    {ProName : "av" , ProPrice : 3000},
    {ProName : "laptop" , ProPrice : 50000},
    {ProName : "android" , ProPrice : 200000}

]

// function check30K(a){
//     return a.ProPrice <300
// }

const ans1 = product.some((a)=>{
    return a.ProPrice < 30000
})

console.log(ans1)