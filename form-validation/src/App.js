import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { Form, Button } from "react-bootstrap";
import app from "./firebase.init";
import "./App.css";

// Create Auth
const auth = getAuth(app);

function App() {
  // Useful States
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);
  const [validated, setValidated] = useState(false);

  // Sign In and Sign Up
  const handleSignInSignUp = (e) => {
    setToggle(e.target.checked);
  };

  // Email Blur Function
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  // Password Blur Function
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  // Name Blur Function
  const handleNameBlur = (e) => {
    setDisplayName(e.target.value);
  };

  // Create Auth Providers
  const googleProvider = new GoogleAuthProvider();
  const faceboProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleAuth = () => {
    // Google Auth
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleFacebookAuth = () => {
    // Facebook Auth
  }

  const handleGithubAuth = () => {
    // Github Auth
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Handle Submit
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
            profileUpdate();
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

  // Update Profile
  const profileUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .then(() => {
        console.log("Set displayName");
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
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    onBlur={handleNameBlur}
                    required
                  />
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
          </Form>
          

          {toggle ? (
            <div className="signIn-buttons">
              <button className="signIn signIn-google" onClick={handleGoogleAuth}>
                Sing in with Google
                <FcGoogle className="singIn-icon" />
              </button>
              <button className="signIn signIn-facebook">
                Sing in with Facebook
                <AiFillFacebook className="singIn-icon signIn-icon-facebook" />
              </button>
              <button className="signIn signIn-github" onClick={handleGithubAuth}>
                Sing in with Github
                <AiFillGithub className="singIn-icon" />
              </button>
            </div>
          ) : (
            ""
          )}

          <div className="form__toggle">
            <p>{toggle ? `don't have and account yet?` : "have an account?"}</p>
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
        </div>
      </section>
    </>
  );
}

export default App;
