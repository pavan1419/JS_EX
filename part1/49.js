// lexical scope
const myVar = "value 1";
function MyApp(){
    function myfun(){
        // var myVar = "19"
        const myfun3 = ()=>{
            console.log("inside fun",myVar)
        }
        myfun3()
    }
    const myfun1 = function(){}
    const myfun2 =()=>{}
    console.log(myVar)
    myfun()
    
}
MyApp()