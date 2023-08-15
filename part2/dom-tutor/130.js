    // synchronous programming vs asynchronous programming 
    // synchronous programming

    // console.log("script is started ")
    // for(let i=1; i< 1000 ; i++){
    //     console.log("inside for loop")
    // }
    // console.log("script end ")

    // setTimeout

    console.log("script is started ")
    
    setTimeout(()=>{
        console.log("print me setTimeout")
    },0)

    for(let i = 1 ; i<1000 ; i++){
        console.log("....")
    }

    console.log("script end ")