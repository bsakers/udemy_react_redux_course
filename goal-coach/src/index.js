import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { logUser } from './actions';
import reducer from './reducers';
//we could have called reducer whatever we wanted; it simply pulls the export
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    // console.log('user has signed in or up', user);
    store.dispatch(logUser(user.email));
    browserHistory.push('/app');
  } else {
    // console.log('user has signed out or still needs to sign in');
    browserHistory.replace('/signin');
  }
})

const store = createStore(reducer)

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
