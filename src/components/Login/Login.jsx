import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
  const [show,setShow] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || '/'

  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, {replace:true});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="form-title">Login</h2>
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              className="input"
              type="email"
              name="email"
              id="log-1"
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              className="input"
              type={show? 'text' : 'password'}
              name="password"
              id="log-2"
              placeholder="Your password"
              required
            />

            <p onClick={() =>setShow(!show)}>
              {
                show ? <span>Hide Password</span> : <span>Show Password</span>
              }
            </p>
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
