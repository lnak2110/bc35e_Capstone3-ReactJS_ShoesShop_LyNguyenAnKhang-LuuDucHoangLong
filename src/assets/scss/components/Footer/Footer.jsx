import React from "react";
import "./_footer.scss";

const Footer = () => {
  return (
    <div classname="row d-flex">
      <div classname="col-4">
        <h3>GET HELP</h3>
        <ul>
          <li>Home</li>
          <li>Nike</li>
          <li>Adidas</li>
          <li>Contact</li>
        </ul>
      </div>
      <div classname="col-4">
        <h3>SUPPORT</h3>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
          <li>Phone</li>
        </ul>
      </div>
      <div classname="col-4">
        <h3>REGISTER</h3>
        <ul>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
