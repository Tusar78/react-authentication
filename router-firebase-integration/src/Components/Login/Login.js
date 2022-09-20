import React from 'react';

const Login = () => {
  return (
    <div className='section'>
      <div className="register custom-grid">
        <h2 className="register__title">Login.</h2>

        <div className="register__form">
          <form className="form">
            <div className="register__form-control">
              <label htmlFor="email" className="register__label">
                Email <span className="text-red-500">*</span>
              </label>
              <input className="register__input" type="email" name="email" id="email" />
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
              <button type="submit" className="btn btn-register">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;