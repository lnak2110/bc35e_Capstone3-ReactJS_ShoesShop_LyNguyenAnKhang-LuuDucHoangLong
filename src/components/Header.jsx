import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { userLogin } = useSelector((state) => state.userReducer);
  const { cartAmount } = useSelector((state) => state.cartReducer);

  const renderLogin = () => {
    if (userLogin) {
      return (
        <NavLink classname="{nav-link}" to="/profile">
          Hello {userLogin.email}
        </NavLink>
      );
    }
    return (
      <NavLink className="nav-link active" aria-current="page" to="/login">
        Login
      </NavLink>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="index">
          <img src="./img/logo.png" alt="..." />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="d-flex my-2 my-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 my-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/search"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/cart"
              >
                <i className="fa-solid fa-cart-plus"></i> ({cartAmount})
              </NavLink>
            </li>
            <li className="nav-item">{renderLogin()}</li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
