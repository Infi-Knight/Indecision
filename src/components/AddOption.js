import React from 'react';

class AddOption extends React.Component {
  // using transform class properties
  // remove the constructor and change the instance method
  // to a arrow function
  state = {
    error: null
  }

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    // clear the input field
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;




// -------------------------------------------
// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       error: null
//     };
//
//     this.handleAddOption = this.handleAddOption.bind(this);
//   }
//
//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
//
//     this.setState(() => ({ error }));
//     // clear the input field
//     e.target.elements.option.value = '';
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
