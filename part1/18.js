let Degree = +prompt()

if(Degree <25)
{
    console.log(`out side is so cold ${Degree} Degree`)
}
else if(Degree <50)
{
    console.log(`out side is  mild ${Degree} Degree`)
}
else if (Degree < 75)
{
    console.log(`out side is  medium hot = ${Degree} Degree`)
}
else if(Degree <100){
    console.log(`out side is so hot = ${Degree} Degree`)
}
else{
    console.log(`${Degree} is out of context `)
}