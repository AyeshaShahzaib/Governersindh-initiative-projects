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
console.log("\n I have found a bigger table for dinner that is why I am inviting three more friends \n\n")
invite.unshift("Umer")
invite.splice(2,0,"Ali")
invite.push("Fabiha")
console.log("Hello",invite[0],message)
console.log("Hello",invite[1],message)
console.log("Hello",invite[2],message)
console.log("Hello",invite[3],message)
console.log("Hello",invite[4],message)
console.log("Hello",invite[5],message)
let apology = "\nSorry I can't invite you because I just found out that my new dinner table won’t arrive in time for the dinner, and I have space for only two guests. "
console.log("Hello",invite[0],apology)
console.log("Hello",invite[2],apology)
console.log("Hello",invite[3],apology)
console.log("Hello",invite[4],apology)
invite.splice(0,1)
invite.splice(1,1)
invite.splice(2,1)
invite.splice(1,1)
console.log("Hello",invite[0],message)
console.log("Hello",invite[1],message)
invite.splice(0,2)
console.log(invite)


