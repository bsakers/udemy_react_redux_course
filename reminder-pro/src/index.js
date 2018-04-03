//This is the top level of our application, our index.js file.
//Here we render an element to the documnet model object (DOM) via ReactDOM.render
//This render method will find our div with an id of 'root' in our index.html and
//replace the children of that element with the App component (as a JSX element).

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
//Provider is what allows us to pass down store (our state) to the whole application
//Note that we wrap the application component in the provider
import { createStore } from 'redux';
//createStore is what allows us to actually instantiate the store
import reminders from './reducers';
import './index.css'

//Here we create the store
const store = createStore(reminders);

//Here we ensure the store is accessible throughout the app by passing it to Provider.
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
