function Cars(Manufacturer,Model,...other_information){
   let car ={
    Manufacturer : Manufacturer,
    Model : Model
} 
             for (let x = 0; x < other_information.length; x += 2)
             {
                let key = other_information[x]
                let value = other_information[x+1]
                car[key]=value
             }  
             return car   
}
let car = Cars("Honda","Civic","Color","Black")
console.log(car)