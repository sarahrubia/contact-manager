import React from "react";
import { Link } from "react-router-dom";

let NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-primary bg-dark navbar-expand-xl">
        <div className="container">
          <Link to={"/"} className="navbar-brand h1 my-2">
            <i className="fa fa-address-book text-warning me-2 display-5" />
            <span className="text-white display-5">Adicione</span>
            <span className="text-warning display-5">.Me</span>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
