
/*
Function Declaration

function greet() {
 return "Hello!";
}
*/


// Arrow Function 

const greet = () => "Hello!";



const person = {
 name: "Skyla",
 regularFunc: function() {
   return this.name; 
 },
 arrowFunc: () => {
   return this.name; 
 }
};

console.log(person.regularFunc()); 
console.log(person.arrowFunc());   

