import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyC070M5tL914C3JLCp57Eps3TNb2jPGPNg",
  authDomain: "marioplaan.firebaseapp.com",
  databaseURL: "https://marioplaan.firebaseio.com",
  projectId: "marioplaan",
  storageBucket: "marioplaan.appspot.com",
  messagingSenderId: "717220343338"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
