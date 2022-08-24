import app from "./firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app)

function App() {
  return (
    <>
      <h2 className="text-red-600">Hello React!</h2>
    </>
  );
}

export default App;
