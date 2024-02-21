function Sandwich(...items){
    if(items.length==0){
        console.log("You want a plain sandwich.")
    }
   else{ 
    console.log("Sandwich Order:"+items.join(",")+ ".")
}
console.log("Thanks For Your Order")
}
Sandwich("Ketchup","Onion","Omelette")
Sandwich("peanut butter","jam")
Sandwich()
