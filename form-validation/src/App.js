import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { Form, Button } from "react-bootstrap";
import app from "./firebase.init";
import "./App.css";

// Create Auth
const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, SetToggle] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleSignInSignUp = (e) => {
    SetToggle(e.target.checked);
  };

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    toggle
      ? signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          })
      : createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            emailVerifiedSMS();
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
  };

  // Email Verified Message
  const emailVerifiedSMS = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email Send your mail!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <section className="container-fluid vh-100 form-section">
        <div className="form-container">
          <div className="form__head">
            <h2 className="form__title">{toggle ? "Explore" : "Register"}</h2>
            <p className="form__subtitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit beatae
              magni.
            </p>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {toggle ? (
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
              </div>
            ) : (
              <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control type="text" placeholder="Username" required />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onBlur={handleEmailBlur}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onBlur={handlePasswordBlur}
                    required
                  />
                </Form.Group>
              </div>
            )}

            <Button variant="primary" type="submit" className="form__btn">
              {toggle ? "LogIn" : "Register"}
            </Button>

            {toggle ? (
              <div className="signIn-buttons">
                <button className="signIn signIn-google">
                  Sing in with Google
                  <FcGoogle className="singIn-icon" />
                </button>
                <button className="signIn signIn-facebook">
                  Sing in with Facebook
                  <AiFillFacebook className="singIn-icon signIn-icon-facebook" />
                </button>
                <button className="signIn signIn-github">
                  Sing in with Github
                  <AiFillGithub className="singIn-icon" />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="form__toggle">
              <p>
                {toggle ? `don't have and account yet?` : "have an account?"}
              </p>
              <div>
                <input
                  type="checkbox"
                  id="sign-in-out"
                  className="form__sign-checkbox"
                  onChange={handleSignInSignUp}
                />
                <label htmlFor="sign-in-out" className="form__sign-in-out">
                  {toggle ? "Sign Up" : "Sign In"}
                </label>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}

export default App;
