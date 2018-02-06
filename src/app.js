import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor() {
//     this.name = 'Mormont'
//   }
//   getGreeting() {
//     return `Hi, my name is ${this.name}`
//   }
// }
//
// const old = new OldSyntax();
// // try to rebind
// const getGreeting = old.getGreeting;
// // console.log(getGreeting()) // error because the this binding is borken
// console.log(old);
//
// // using transform class properties
// class NewSyntax {
//   // we don't need a constructor
//   name = 'Thor';
//   getGreeting = () => `Hi, my name is ${this.name}`
// }
//
// const newsyntax = new NewSyntax();
// // try to rebind
// const newGetGreeting = newsyntax.getGreeting;
// console.log(newGetGreeting());
// // works fine because arrow functions do not
// // have their own this binding
// console.log(newsyntax);
