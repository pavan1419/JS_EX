// object destructuring
const band ={
    bandName : "zolebaba band ",
    famousSong : "neli tila pataun"
}
// const bandName = band.bandName
// const famousSong = band.famousSong
// console.log(bandName)
// console.log(famousSong)

let {bandName , famousSong:var2} = band
bandName = "bombey band"
console.log(bandName,"=", var2)
