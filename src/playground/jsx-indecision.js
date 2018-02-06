// Code from this file can be transpiled to the public/scripts/app.js:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

console.log('App is running');

var app = {
	title: 'Indecision App',
	subtitle: 'AI is gonna rule...',
	options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  // e.target is the element in from which event started i.e form
  // e.target.elements is the list of all elements of form
  // e.target.elements.option recognizes that particular element of the form
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render()
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
}

// onSubmit is an event. See react docs for more
// JSX inside JSX requires "key" props for efficient re-rendering

var appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your items: ' : 'No items found'}</p>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        { app.options.map((option) => <li key={option}>Option: {option}</li>) }
      </ol>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
