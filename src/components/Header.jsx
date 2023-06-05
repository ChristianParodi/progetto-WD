import React from "react";
import workLogo from "/assets/logo.svg";

function Header() {
  return (
    <>
      <a href="/">
        <img src={workLogo} alt="logo" className="m-auto mt-6 md:m-6 w-64" />
      </a>
    </>
  );
}

export default Header;
