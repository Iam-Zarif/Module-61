import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
      <div>
        <h2 className="form-title">Login</h2>
        <div className="login-container">
          <form>
            <div className="form-control">
              <label htmlFor="email">Email : </label>
              <input
                className="input"
                type="email"
                name="email"
                id=""
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password : </label>
              <input
                className="input"
                type="password"
                name="password"
                id=""
                placeholder="Your password"
                required
              />
            </div>
            <input type="submit" value="login" className="btnSubmit" />
          </form>
          <p className="alreadyHaveAccount">
            New to Ema-john? <Link to="/signup">register</Link>{" "}
          </p>
        </div>
      </div>
    );
};

export default Login;