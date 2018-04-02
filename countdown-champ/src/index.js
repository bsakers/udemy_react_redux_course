//This is the top level of our application, our index.js file.
//Here we render an element to the documnet model object (DOM) via ReactDOM.render
//This render method will find our div with an id of 'root' in our index.html and
//replace the children of that element with the App component (as a JSX element).

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
