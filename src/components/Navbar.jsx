import React, { useContext } from "react";
import workLogo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";

import { RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "../context/AuthProvider";
import Loader from "./../utils/Loader";

import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const HamburgerMenu = () => {
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

const AvatarMenu = () => {
  const { setUser } = useContext(UserContext);

  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="candice wu"
          className="cursor-pointer"
          src="/assets/avatar.jpg"
        />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Inbox
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          onClick={() => {
            setUser(null);
            localStorage.removeItem("remember");
          }}
          className="flex items-center gap-2 "
        >
          <PowerIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

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
      {/* Buttons */}
    </div>
  );
}

export default Navbar;
