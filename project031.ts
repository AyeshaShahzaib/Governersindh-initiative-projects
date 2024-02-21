let usernames = ["Admin","Farooq","Raza","Ali","Fatima"]
let username = "Raza"
if(usernames.length==0)
console.log("We want more users")
for(let username of usernames)
if (username=="Admin") {
    console.log("Hello Admin,Welcome.Would you like to see the status report??")
} else {
    console.log(username,"Hello, Welcome")
}
usernames=[]
if(usernames.length==0)
console.log("We want more users")