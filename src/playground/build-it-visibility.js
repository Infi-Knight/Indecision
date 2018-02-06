class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
      message: 'Ignorance is a bliss'
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>VISIBILITY TOGGLE</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && <p>{this.state.message}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const message = "Here are the details";
// let visibility = false;

// const appRoot = document.getElementById('app');

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>VISIBILITY TOGGLE</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && <p>{message}</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// render();
