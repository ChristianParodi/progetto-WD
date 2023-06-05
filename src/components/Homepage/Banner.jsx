import React from "react";

import banner1 from "/assets/banner_1.svg";
import banner2 from "/assets/banner_2.svg";
import banner3 from "/assets/banner_3.svg";
import { Button, Typography } from "@material-tailwind/react";

import workLogo from "/assets/logo.svg";

function Banner() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3">
      <div
        className={
          "h-96 bg-[url(" +
          workLogo +
          ")] bg-cover flex justify-center items-end"
        }
      >
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Scopri di più
        </Button>
      </div>
      <div
        className={
          "bg-[url(" + workLogo + ")] bg-cover flex justify-center items-end"
        }
      >
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Crea <br /> offerta di lavoro
        </Button>
      </div>
      <div
        className={
          "bg-[url(" + workLogo + ")] bg-cover flex justify-center items-end"
        }
      >
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Crea portfolio
        </Button>
      </div>
    </div>
  );
}

export default Banner;
