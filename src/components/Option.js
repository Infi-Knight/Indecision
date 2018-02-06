import React from 'react';

// we are importing react because at the end jsx is going
// to be converted to js via react
const Option = props => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>    
    {/* Pass the individual option to handleDeleteOption in IndecisionApp */}
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);
// export default (props) => ... would create a bad development
// expreience in dev tools as we have no name for that component

export default Option;
