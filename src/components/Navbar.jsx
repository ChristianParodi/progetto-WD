import React from "react";
import workLogo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="flex justify-between items-center border border-b-2 border-[#E7E7E7]">
      <Link to={"/"}>
        <img src={workLogo} alt="logo" className="ml-6 my-5 border-red" />
      </Link>
      {/* Collapsed menu */}
      <Menu className="block md:hidden">
        <MenuHandler>
          <IconButton
            variant="text"
            size="lg"
            className="block md:hidden mr-6 text-black"
          >
            <RxHamburgerMenu size={"lg"} className="mr-6" />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link to={"/login"}>
              <Button
                variant="text"
                className="text-[16px] normal-case t-6 p-5 text-primaryUnclicked active:bg-inherit hover:bg-inherit my-auto"
              >
                Accedi
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/register"}>
              <Button
                variant="text"
                className="text-[16px] normal-case mt-6 p-5 text-primaryUnclicked active:bg-inherit hover:bg-inherit my-auto"
              >
                Registrati
              </Button>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      {/* Buttons */}
      <div className="hidden md:flex items-center justify-center gap-2 mr-6">
        <Link to={"/login"}>
          <Button
            variant="text"
            className="text-[16px] normal-case t-6 p-5 text-primaryUnclicked active:bg-white focus:bg-white hover:bg-white my-auto"
          >
            Accedi
          </Button>
        </Link>
        <Link to={"/register"}>
          <Button
            variant="text"
            className="text-[16px] normal-case mt-6 p-5 text-primaryUnclicked active:bg-white focus:bg-white hover:bg-white my-auto"
          >
            Registrati
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
