const firebaseConfig = {
  apiKey: "AIzaSyCGw9PR5HtBdbBtBdamm1TprnlwbB7DJLs",
  authDomain: "contact-form-fb6e4.firebaseapp.com",
  projectId: "contact-form-fb6e4",
  storageBucket: "contact-form-fb6e4.appspot.com",
  messagingSenderId: "133756704545",
  appId: "1:133756704545:web:4a2f6772bc5bd309e61060",
  measurementId: "G-HG3F4RFH12"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();