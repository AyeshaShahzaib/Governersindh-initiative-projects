var personName = "Ayesha Shahzaib daughter of Shahzaib Shabbir";
console.log("Original Name:", personName );
console.log("Uppercase:", personName.toUpperCase() );
console.log("Lowercase:", personName.toLowerCase() );
var titleCaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Title case:",titleCaseName)
 


