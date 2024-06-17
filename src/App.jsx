import { handleSignOut, handleGoogleSignIn } from "./firebase/firebase-auth"

function App() {
  return (
    <div className="text-xl font-bold">
      <div className="not-signed-in">
        <button onClick={handleGoogleSignIn} className="border-2 p-4 bg-purple-500 text-white">Sign In with Button</button>
      </div>
      <div className="signed-in">
        <h1>Your Name is</h1>
        <button onClick={handleSignOut} className="border-2 p-4 bg-purple-500 text-white">Sign out</button>
      </div>
    </div>
  )
}

export default App;
