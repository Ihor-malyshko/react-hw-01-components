import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App(props) {
  console.log(props);
  return (
    <>
      <h2>{props.text}</h2>
    </>
  );
}

export default App;

App.defaultProps = {
  text: 'name',
};
