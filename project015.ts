let invite = ["Maira","Sumaiyya", "Zainab"]
let message = "Would you like to join me for dinner? I'd be happy to have you."
console.log("Hello",invite[0],message)
console.log("Hello",invite[1],message)
console.log("Hello",invite[2],message)
console.log(invite[1],"can't make it")
invite.splice(1,1,"Ayesha")
console.log("Hello",invite[0],message)
console.log("Hello",invite[1],message)
console.log("Hello",invite[2],message)