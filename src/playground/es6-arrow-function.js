console.log('es6-arrow-functions connected');
// es5
const square = function (x) {
    return x*x;
};
console.log('square', square(8));

// es5
function square2 (x) {
    return x*x;
};
console.log('square2 ', square2(9));

// es6 functions are always Anonymous i.e we always need them to assign 
// them to some variable for stand alone functionality:
const squareArrow = (x) => {
    return x*x;
};
console.log('squareArrow ', squareArrow(10));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Dan Brown'));
