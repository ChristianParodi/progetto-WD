import React, { useContext } from "react";
import workLogo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import { UserContext } from "../../context/AuthProvider";

import { HamburgerMenu } from "./HamburgerMenu";
import { AvatarMenu } from "./AvatarMenu";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center border border-b-2 border-[#E7E7E7] px-6 py-5">
      {/* Logo */}
      <Link to={"/"}>
        <img src={workLogo} alt="logo" />
      </Link>
      {/* Collapsed menu */}
      {user ? (
        <AvatarMenu />
      ) : (
        <>
          <HamburgerMenu />
          <div className="hidden md:flex items-center justify-center gap-2 mr-6">
            <Link to={"/login"}>
              <Button
                variant="text"
                className="text-[16px] normal-case t-6 p-5 text-primaryUnclicked active:bg-inherit focus:bg-inherit my-auto"
              >
                Accedi
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                variant="text"
                className="text-[16px] normal-case mt-6 p-5 text-primaryUnclicked  active:bg-inherit focus:bg-inherit my-auto"
              >
                Registrati
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
