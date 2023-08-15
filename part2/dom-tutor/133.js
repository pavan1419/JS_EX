// callbacks 



const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading")


// // callback hell
// setTimeout(()=>{
//     heading1.textContent = "heading one "
//     heading1.style.color = "yellow "

//     setTimeout(()=>{
//         heading2.textContent = "heading two "
//         heading2.style.color = "purple "
        
//         setTimeout(()=>{
//             heading3.textContent = "heading three "
//             heading3.style.color = "red"

//             setTimeout(()=>{
//                 heading4.textContent = "heading four "
//                 heading4.style.color = "pink"

            
//                 setTimeout(()=>{
//                     heading5.textContent = "heading five "
//                     heading5.style.color = "cyan"

            
//                     setTimeout(()=>{
//                         heading6.textContent = "heading 6 "
//                         heading6.style.color = "ble"

//                             setTimeout(()=>{
//                                 heading7.textContent = "heading 7 "
//                                 heading7.style.color = "voilet"
    
//             },1000)

//         },3000)

//         },2000)

//         },1000)

//         },2000)
    
//     },2000)
    
    
// },1000)


function changeText(element , text ,color,  time, OnSucess , Error1 ){
    setTimeout(()=>{
        if(element){
        element.textContent = text
        element.style.color = color
        if(OnSucess){
            OnSucess()
        }  } 
        else{
            if(Error1){
                Error1()
            }
        }

    },time)
}

changeText(heading1 , "one" , "red" ,2000, ()=>{
    changeText(heading2,"two","pink",1000,()=>{
        changeText(heading3,"three","yellow",2000,()=>{
            changeText(heading4,"four","blue",1000,()=>{
                changeText(heading5,"five","green",1000,()=>{
                    changeText(heading6,"six","red",1000,()=>{
                        changeText(heading7,"seven","purple",1000,()=>{
                    
                        },()=>{
                            console.log("your element is not found ")
                        },()=>{
                            console.log("your element is not found ")
                        })
                    },()=>{
                        console.log("your element is not found ")
                    })
                
                },()=>{
                    console.log("your element is not found ")
                })
            
            },()=>{
                console.log("your element is not found ")
            })
        },()=>{
            console.log("your element is not found ")
        })
    })
},()=>{
    console.log("your element is not found ")
})
