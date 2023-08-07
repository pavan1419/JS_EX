// find method

const myArray = ["cat","dog","mango","apple"]

// function isLength(string){
//     return string.length === 5;
// }

const ans = myArray.find((stirng)=>{
    return stirng.length === 5
})
console.log(ans)


const User =[
    {FName : "pavan" , LName :"awagan"},
    {FName : "ram" , LName :"aa"},
    {FName : "ramesh" , LName :"aana"},
    {FName : "vidya" , LName :"mathu"}

]

// function lenght1(a){
//     return a.FName.length === 5 && a.LName.length === 5
// }

const ans1 = User.find((a)=>{ 
    return a.FName.length ===5 && a.LName.length === 5
})
console.log(ans1)