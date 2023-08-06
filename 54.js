//Call back function

function myfunc2(name){
    console.log(`my name is ${name}`)
    console.log("hhi fun 2")
}

function myfun(callback){
    // console.log(a)
    console.log("my world")
    callback("pavan")
}
myfun(myfunc2)

