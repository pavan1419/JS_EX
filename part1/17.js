let Num = 9
let useGuess = +prompt("guess a number ")

if(useGuess === Num){
    console.log("your guess number is right ")

}
else{
    if(useGuess < Num)
    {
    console.log(`number is small`)
    }
    else
    {
        console.log(`number too big `)
    }
}

