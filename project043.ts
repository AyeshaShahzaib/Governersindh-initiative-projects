function makeGreat(magicians){
    const greatMagicians = [];
    for (const magician of magicians) {
        const greatMagician = "Great " + magician;
        greatMagicians.push(greatMagician)
    }
    return greatMagicians
}
function showMagicians(magicians){
    for (const magician of magicians) {
        console.log(magician)
    }
}
let Magicians =["David Copperfield" ,"Harry Houdini" ,"Penn Jillette and Teller"]
let Magicians_copy=[...Magicians]
let greatMagicians = makeGreat(Magicians_copy)
console.log("original array")
showMagicians(Magicians)
console.log("Great Magicians")
showMagicians(greatMagicians)




