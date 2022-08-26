import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [toggle, SetToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignInSignUp = (e) => {
    SetToggle(e.target.checked);
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
          <Form onSubmit={handleSubmit}>
            {toggle ? (
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </div>
            ) : (
              <div>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </div>
            )}

            <Button variant="light" type="submit" className="form__btn">
              {toggle ? "LogIn" : "Register"}
            </Button>

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
