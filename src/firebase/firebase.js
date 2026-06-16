import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNr3knScjm5_iCosP7JmqsZZtyc6_QaKk",
  authDomain: "fir-with-react-d3a6d.firebaseapp.com",
  databaseURL: "https://fir-with-react-d3a6d-default-rtdb.firebaseio.com",
  projectId: "fir-with-react-d3a6d",
  storageBucket: "fir-with-react-d3a6d.firebasestorage.app",
  messagingSenderId: "810212529487",
  appId: "1:810212529487:web:db79871ed6b94bad8a213a"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
