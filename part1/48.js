// function inside function

const app =  ()=>{
    const MyFun = ()=>{
        console.log("myy function")
    }
    MyFun()

    const add = (n1,n2) =>{
        return n1+n2;
    }
    const nul = (n1, n2) => n1*n2
    console.log(add(4,4))
    console.log(nul(22,3)) 
    
    console.log("inside app")
}
app()
