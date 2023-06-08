import React from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";

export const HamburgerMenu = () => {
  return (
    <Menu className="block md:hidden">
      <MenuHandler>
        <IconButton
          variant="text"
          size="lg"
          className="block md:hidden mr-6 text-black"
        >
          <RxHamburgerMenu size={"24"} />
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem className="font-bold text-[16px] text-center text-primaryUnclicked py-4">
          <Link to={"/login"}>Accedi</Link>
        </MenuItem>
        <MenuItem className="font-bold text-[16px] text-center text-primaryUnclicked py-4">
          <Link to={"/register"}>Registrati</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
