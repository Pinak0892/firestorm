  import firebase from 'firebase/app';
  import 'firebase/database';
  import 'firebase/auth';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1-FiT4TPVhug79nh72D1bGN20z2uH9w4",
    authDomain: "firestorm-001.firebaseapp.com",
    databaseURL: "https://firestorm-001.firebaseio.com",
    projectId: "firestorm-001",
    storageBucket: "firestorm-001.appspot.com",
    messagingSenderId: "908580855980"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;