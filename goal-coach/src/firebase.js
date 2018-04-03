//This is our firebase file, which we configure for three uses:
//1.) initialize the app, thus allowing user log-in functionality
//2.) create a goal reference, allowing us to store and access goals in the
//firebase database.
//3.) create a completed goals reference, allowing us to store and access
//completed goals in the firebase database.
//All of the below is accessible via the firebase library.

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDpI8nGcGKHTgIvjwtdp2O9YaJkAZ22M7I",
  authDomain: "goal-coach-a48e5.firebaseapp.com",
  databaseURL: "https://goal-coach-a48e5.firebaseio.com",
  projectId: "goal-coach-a48e5",
  storageBucket: "",
  messagingSenderId: "926458008145"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef= firebase.database().ref('goals');
export const completeGoalRef= firebase.database().ref('completeGoals')
