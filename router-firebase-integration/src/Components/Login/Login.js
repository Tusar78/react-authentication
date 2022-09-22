import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="section">
      <div className="register custom-grid">
        <h2 className="login__title">Login.</h2>

        <div className="register__form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="register__form-control">
              <label htmlFor="email" className="register__label">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="register__input"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="register__form-control">
              <label htmlFor="password" className="register__label">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className="register__input"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="register__form-control">
              <button className="register__google">
                <FcGoogle className="register__google-icon" /> Login with google
              </button>
            </div>
            <div className="register__form-control">
              <button type="submit" className="btn btn-login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
