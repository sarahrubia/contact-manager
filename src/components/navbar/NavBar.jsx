import React from "react";
import { Link } from "react-router-dom";

let NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-primary bg-primary navbar-expand-lg">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <i className="fa fa-address-book text-white me-2"></i>
            Adicione.<span className="text-white">Me</span>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
