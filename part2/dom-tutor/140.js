const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest()

// step `1`

xhr.open("GET",URL)

// xhr.onreadystatechange = function(){
//     console.log(xhr)

//     if(xhr.readyState === 4){
//         const resopnse = xhr.response
//     const data = JSON.parse(resopnse)
// console.log(data)
//     }
// }

xhr.onload = function(){
    console.log(xhr.readyState)
    
    const resopnse = xhr.response
    const data = JSON.parse(resopnse)
    // console.log(resopnse)
    // console.log(data)
}

xhr.send()