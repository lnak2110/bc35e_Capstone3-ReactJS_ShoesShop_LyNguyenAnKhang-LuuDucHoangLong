import React from 'react'
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="container">
        <h3>Login</h3>
        <form className="w-50 login_form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group">
            <NavLink to="/register">Register Now?</NavLink>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              <i class="fa-brands fa-facebook"></i> Continue with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login