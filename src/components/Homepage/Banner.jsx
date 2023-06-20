import React, { useContext } from "react";
import { UserContext } from "./../../context/AuthProvider";

import banner1 from "/assets/International_cooperation.gif";
import banner2 from "/assets/Job_offers.gif";
import banner3 from "/assets/profile_data.gif";
import { Button, Typography } from "@material-tailwind/react";

import workLogo from "/assets/logo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Banner() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3">
      <div className="flex flex-col items-center">
        <div
          style={{
            backgroundImage: `url("${banner1}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          className={"h-96 w-full flex flex-col justify-center items-center"}
        >
          <Typography variant="h6" className="text-[#0C3149]">
            Crea e lancia <br />
            il tuo portfolio <br />
            nel mondo <br />
            del lavoro
          </Typography>
        </div>
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Scopri di più
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <div
          style={{
            backgroundImage: `url("${banner2}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          className={"h-96 w-full bg-cover flex justify-center items-end"}
        ></div>
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Crea <br /> offerta di lavoro
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <div
          style={{
            backgroundImage: `url("${banner3}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          className={"h-96 w-full bg-cover flex justify-center items-end"}
        ></div>
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Crea <br /> portfolio
        </Button>
      </div>
    </div>
  );
}

export default Banner;
