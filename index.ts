import inquirer from "inquirer";
const result = await inquirer.prompt([
    {message:"Enter the first value",type:"input",name:"Value1"},
    {message:"Enter the second value",type:"input",name:"Value2"},
    {message:"Enter the operator required of the following given",
    type:"list",name:"operator",choices:["+","-","*","/"]}
])
const Value1 = Number(result.Value1)
const Value2 = Number(result.Value2)
if(isNaN(Value1)||isNaN(Value2)){
    console.log("Enter valid values")
}else{
if (result.operator=="+"){
    console.log(Value1 + Value2)
}else if (result.operator=="-"){
    console.log(Value1 - Value2)
}else if (result.operator=="*"){
    console.log(Value1 * Value2)
}else if (result.operator=="/"){
    console.log(Value1 / Value2)
}
}
