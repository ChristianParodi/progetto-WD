import React from "react";
import workLogo from "/assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <img src={workLogo} alt="logo" className="m-auto mt-6 md:m-6 w-64" />
      </Link>
    </>
  );
}

export default Header;
