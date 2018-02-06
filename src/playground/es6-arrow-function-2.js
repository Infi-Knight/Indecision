// arguments object and the this keyword are no longer bound 
// in es6 arrow functions

// arguments object:
const add = function (a, b) {
  // arguments object contains the arguments passed to the function
  console.log(arguments);
  return a+b;
}

// however arguments is not available in arrow functions

console.log(add(55, 56, 1000));

const user = {
    name: 'Ravi Soni',
    cities: ['Delhi', 'Meerut', 'Lucknow'],

    // // this keyword is accessible here
    // printPlacesLived: function () {
    //   const that = this;
    //   this.cities.forEach(function(city) {
    //     // since this is an ANONYMOUS function this keyword is not accessible
    //     console.log(that.name + ' has lived in ' + city);
    //   });
    // }

    //         // OR WE CAN BIND THIS TO THE ANONYMOUS FUNCTION
    //         // IF WE DON'T BIND IT undefined will be used
    // printPlacesLived: function() {
    //   this.cities.forEach(function(city) {
    //     console.log(this.name + ' has lived in: ' + city);
    //   }, this);
    // }

    // // arrow functions don't bind their own this
    // // they use 'this' of the parent object:
    // printPlacesLived: function() {
    //   this.cities.forEach((city) => {
    //     console.log(this.name + ' has lived in: ' + city);
    //   });
    // }

    // // Remember when not to use arrow functions:
    // // this code will produce an error because in the parent anonymous
    // // function this keyword is actually global object which is undefined in this case
    // // hence this.cities here means undefined.cities
    // printPlacesLived: () => {
    //   this.cities.forEach((city) => {
    //     console.log(this.name + ' has lived in: ' + city);
    //   });       
    // }

    //----------------- IMPORTANT ---------------------------------- 
    // There is however a new syntax for using arrow functions 
    // as object methods
    printPlacesLived() {
      // this.cities.forEach((city) => {
      //   console.log(this.name + ' has lived in ' + city);
      // });

      // map allows us to transform the individual items in array
      // and return a new array. map method does not modify original array
      const cityMessage = this.cities.map((city) => {
        return this.name + ' has lived in ' + city;
      });
      return cityMessage;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
