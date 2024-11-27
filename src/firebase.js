import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4zBxMxbygu6sdcGn6mlgJzaXKnGL8ns0",
  authDomain: " lal-sports-academy-2a6ae.firebaseapp.com",
  projectId: "lal-sports-academy-2a6ae",
  storageBucket: "lal-sports-academy-2a6ae.appspot.com",
  messagingSenderId: "462181985162",
  appId: "1:462181985162:web:297ca5c5fa74fd4498b673",
  measurementId: "G-KP7G2V6NJZ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };

// const firebaseConfig = {
//   apiKey: "AIzaSyCvoUg6tW1Rk2ycI9h7yfQ07tBzEPMHfNY",
//   authDomain: "monis-food.firebaseapp.com",
//   projectId: "monis-food",
//   storageBucket: "monis-food.firebasestorage.app",
//   messagingSenderId: "1080631941758",
//   appId: "1:1080631941758:web:39763ba342bc4c1c64962f",
//   measurementId: "G-4H3FG9VX72"
// };