// Function declaration
function add() {
 return arguments[0] + arguments[1]; 
}
console.log(add(5, 10));

// Arrow function
const addArrow = (...args) => {
 return args[0] + args[1];  
};
console.log(addArrow(5, 10));  
