class Counter extends React.Component {
  constructor(props) {
    super(props);

    // set up the default state
    this.state = {
      count: props.count
    };

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem('count'), 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    // // this will definitely update state but will not render it:
    // this.state.count++;
    // console.log(this.state)
    // So we use setState() method
    // prevState is the previous state
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });

    // // this.setState() can also be used without the updater function
    // // i.e we can simply pass the state object and update it but you
    // // shouldn't do it as it has some quirks:
    // // this.setState() is an asynchronous call
    // // hence the result of the following code is not what you would expect
    // this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// }

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }

// // JSX has no automatic data binding. So the templateTwo is rerendered
// // whenever the count updates

// // console.log(templateTwo);

// var appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// // Render counterApp for the first time
// renderCounterApp();
