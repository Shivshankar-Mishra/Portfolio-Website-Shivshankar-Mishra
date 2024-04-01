
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBe4aSAk4Y_RqVJrG43YCQqnvEomlkcwU0",
  authDomain: "shivshankar-mishra.firebaseapp.com",
  projectId: "shivshankar-mishra",
  storageBucket: "shivshankar-mishra.appspot.com",
  messagingSenderId: "515276539118",
  appId: "1:515276539118:web:5361b06cacfe5f0b831fff",
  measurementId: "G-3CMQX7RR47"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;