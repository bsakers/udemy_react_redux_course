import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
//Provider is what allows us to pass down store (or our state) to the whole application
//Note that we wrap the application component in the provider
import { createStore } from 'redux';
//createStore is what allows us to actually instantiate the store
import reminders from './reducers';
import './index.css'

const store = createStore(reminders);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// apparently you can also replace reminders with "reducer"
