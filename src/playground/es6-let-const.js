// With var based variables you can both reassign and redefine
// a variable you just created
var nameVar = 'Ravi';
var nameVar = 'Sourav'; // Redefining is perfectly fine via var variables
console.log('nameVar ',nameVar);

// However let based variables don't allow redifining the variable
// you can only reassign them
let nameLet = 'Tanisha';
console.log('nameLet ', nameLet);

// With consts we can only assign them a value once and for all
const nameConst = 'Rithik';
console.log('nameConst', nameConst);

// SCOPING:
// VAR, CONST, LET all these have a scope of the function in which
// they are defined

// Block level scoping
// LET and CONST are block level scoped whereas var based variabes
// are function scoped:

// this works fine
var fullName = 'Ravi Soni';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

// this doesn't
var fullName2 = 'Ravi Soni';

if (fullName2) {
    let firstName2 = fullName2.split(' ')[0];
    console.log(firstName2);
}
// this line will throw an error because the scope of let 
// was exhausted in the above if statement
// console.log(firstName2);