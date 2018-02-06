import React from 'react';
import ReactDOM from 'react-dom';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

// create a header component by extending React.Component class
// with react components it is necessary to use capitalised names
// and that's how react differentiates between an html tag and a component
// If you try to name a component in lowercase react will create an element
// instead of a component( see the transpiled output ).
// unlike an es6 class, in react components we are required to have a
// render() method
class IndecisionApp extends React.Component {
  // using transform class properties
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    // Shorthand for returning an object from an arrow function in es6
    this.setState(() => ({ options: [] }));
    // // we could have used this but that's a litte
    // // verbose so we used the Shorthand above
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
  };

  // function to clear the selectedOption
  // to close the Modal
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  // function to delete individual options
  handleDeleteOption = optionToRemove => {
    // return a new object in which options array doesn't
    // contain the option to be deleted. Note that a Shorthand is being used
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };

  // some of the child components need to manipulate the state
  // IndecisionApp component can pass the data to its children as props
  // but the children can't. So to achieve this two-way data flow
  // we will pass some functions like handleDeleteOptions as props
  handleAddOption = option => {
    if (!option) {
      return 'Enter a valid option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    // we could have done something like: prevState.options.push(option)
    // But we don't because updating state directly isn't the good way
    // so we compute new state, here using concat and then return it
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    this.setState(() => ({ selectedOption: option }));
  };

  // componentDidMount is a lifecycle event which is called when
  // the component is first rendered
  // lifecycle events have the correct this binding
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        // es6 Shorthand
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing if the data is corrupt
    }
  }

  // componentDidUpdate is called when the component updates
  // i.e when props or state changes
  componentDidUpdate(prevProps, prevState) {
    // console.log('update');
    if (prevState.options.length !== this.state.options.length) {
      // only strings can be stored inside localStorage
      const json = JSON.stringify(this.state.options);
      // save this json to localStorage
      localStorage.setItem('options', json);
    }
  }

  // componentWillUnoumnt fires just before your component goes away

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            {/* pass the handleDeleteOption from Options to Option */}
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />            
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;

// -------------------------------------------------
// constructor(props) {
//   super(props);
//
//   this.state = {
//     options: props.options
//   };
//
//   this.handleAddOption = this.handleAddOption.bind(this);
//   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//   this.handleDeleteOption = this.handleDeleteOption.bind(this);
//   this.handlePick = this.handlePick.bind(this);
// }

// IndecisionApp.defaultProps = {
//   options: []
// };
