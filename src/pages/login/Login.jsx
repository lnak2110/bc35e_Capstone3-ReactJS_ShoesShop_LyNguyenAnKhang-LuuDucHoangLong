import React from 'react';
import { NavLink } from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup'
import { loginApi } from '../../redux/reducer/userReducer';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Email is invalid')
    }),
    onSubmit: (values) => {
      console.log(values);
      const actionAsync = loginApi(values);
      dispatch(actionAsync)
    }
  })
  return (
    <div>
      <div className="container">
        <h3>Login</h3>
        <form className="w-50 login_form" onSubmit={frm.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            {frm.errors.email && <p className='text text-danger'>{frm.errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <NavLink to="/register">Register Now?</NavLink>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          {/* <div className="form-group">
            <button type="submit" className="btn btn-primary">
              <i className="fa-brands fa-facebook"></i> Continue with Facebook
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
