class Person {
  // constructor is created by the special syntax:
  // es6 allows you to use function defaults for arguments
  constructor(name = "ANONYMOUS", age = 0) {
    // 'this' refers to the instance of the class being created
    this.name = name;
    this.age = age;
  }

  // methods other than the constructor function are shared
  // by all the instances of the class
  getGreeting() {
    return `Hi I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

// A subclass can be created using the extends keyword
class Student extends Person {
  constructor(name, age, major) {
    // constructor of parent can be accessed using super keyword
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  // override parent's method
  getDescription() {
    // parent's methods can be accessed using the super keyword
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `. Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += `. I am visiting from ${this.homeLocation} `;
    }
    return greeting;
  }
}

const tr1 = new Traveller("Ravi", 20, "Delhi");
console.log(tr1);
console.log(tr1.getGreeting());

// const me = new Student('Ravi Soni', 20, 'Computer Science');
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getDescription());
