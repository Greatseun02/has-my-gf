// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChv7QLXHI_N8hy4Ea27KDRsHhZIhxOaxQ",
  authDomain: "my-gf-c5188.firebaseapp.com",
  projectId: "my-gf-c5188",
  storageBucket: "my-gf-c5188.appspot.com",
  messagingSenderId: "1035883337851",
  appId: "1:1035883337851:web:91d4444f0769f06befeade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {

  return (
    <div className="text-xl font-bold">
      Hello World
    </div>
  )
}

export default App
