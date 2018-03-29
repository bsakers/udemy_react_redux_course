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
