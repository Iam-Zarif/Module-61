import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const SignUp = () => {
const {createUser} = useContext(AuthContext);

  const [error,setError] = useState('');
  const handleSubmit =(e)=>{

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email,password,confirmPassword);

    setError('')
    if(password !== confirmPassword){
      setError("Your password didn't matched!!!");
      return;
      
    }
    else if(password.length < 6){
      setError("Your password must contain at least 6 characters longer");
      return
    }
    createUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log(error)
      setError(error.message);
    })
  }
    return (
      <div>
        <h2 className="form-title">Sign Up</h2>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email  </label>
              <input
                className="input"
                type="email"
                name="email"
                id="one"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password  </label>
              <input
                className="input"
                type="password"
                name="password"
                id="two"
                placeholder="Your password"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Confirm Password  </label>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                id="three"
                placeholder="Your password"
                required
              />
            </div>
            <input type="submit" value="Signup" className="btnSubmit" />
          </form>
          <p className='alreadyHaveAccount'>already have an account? <Link to='/login'>Login</Link> </p>
        </div>
        <p className='signUpError'>{error}</p>
      </div>
    );
};

export default SignUp;