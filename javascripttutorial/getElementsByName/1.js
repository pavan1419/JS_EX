let btn = document.getElementById("btnrate")
let op = document.getElementById("output")

btn.addEventListener("click" , () =>{
    let rates = document.getElementsByName("rate")
    for(let rate of rates ){
        if (rate.checked) {
            op.innerText = `you have selected ${rate.value}`
        }
    }})
0


// let btn = document.getElementById('btnrate');
// let output = document.getElementById('output');

// btn.addEventListener('click', () => {
//     let rates = document.getElementsByName('rate');
//     rates.forEach((rate) => {
//         if (rate.checked) {
//             output.innerText = `You selected: ${rate.value}`;
//         }
//     })
// })