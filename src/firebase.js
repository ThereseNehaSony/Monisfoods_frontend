import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvoUg6tW1Rk2ycI9h7yfQ07tBzEPMHfNY",
  authDomain: "monis-food.firebaseapp.com",
  projectId: "monis-food",
  storageBucket: "monis-food.firebasestorage.app",
  messagingSenderId: "1080631941758",
  appId: "1:1080631941758:web:39763ba342bc4c1c64962f",
  measurementId: "G-4H3FG9VX72"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };