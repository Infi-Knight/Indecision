import React from 'react';

// A stateless functional component should be used
// if the component doesn't have any state
// Although they don't allow state but they do allow props
// props are passed as first argument in these functional components
// Stateless funtional components are faster than class based components

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);
// Give some default props to our functional component
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
