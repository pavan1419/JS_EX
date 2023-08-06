// function returing gunction

function myfunc(){
    function hello(){
     return "hello"
    }
    return hello
    
}
const ans = myfunc()
console.log(ans())


function myfunc1(){
    return function hello1(){
        return "hello"
    }
}
const ans1 = myfunc1()
ans()
