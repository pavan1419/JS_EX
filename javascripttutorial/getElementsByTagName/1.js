let btn = document.getElementById("count_btn")

btn.addEventListener('click', () =>{
    let heading = document.getElementsByTagName("h2")
    alert(`${heading.length} numbers of h2 tags present`)
})