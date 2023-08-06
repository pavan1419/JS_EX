// reduce methode  

const n1 = [1,2,3,4,5,6,7,8]

const sum = n1.reduce(ans =(accu , currentValue)=>{
    return accu + currentValue
})


console.log(sum)


const UserCart = [
    { proId : 1, ProName : "tv", ProPrice : 125000},
    { proId : 2, ProName : "laptop", ProPrice : 90000},
    { proId : 3, ProName : "iPhone", ProPrice : 50000}
]

const TotalValue = UserCart.reduce((total, current )=>{
return total + current.ProPrice 
},0)
console.log(TotalValue)
