//This is the top level of our application, our index.js file.
//Here we render an element to the documnet model object (DOM) via ReactDOM.render
//This render method will find our div with an id of 'root' in our index.html and
//replace the children of that element with whatever is noted in our Provider component.

//Here we take advantage of react-router to define different paths within our application.
//Each path has an associated component

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { logUser } from './actions';
import reducer from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

//Here we take advantage of google's fireBase to build a user authenticator.
//The code below represents a promise, returning information about the user.
//We then dispatch our logUser action creator, so that we can store the user in
//our store, thus being accessible throughout the application.
//See the firebase file for additional information.
firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    store.dispatch(logUser(user.email));
    browserHistory.push('/app');
  } else {
    browserHistory.replace('/signin');
  }
})

//Here we create the store
const store = createStore(reducer)

//Here we ensure the store is accessible throughout the app by passing it to Provider.
ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App}/>
      <Route path="signin" component={SignIn}/>
      <Route path="signup" component={SignUp}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
