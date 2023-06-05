import React from "react";

import banner1 from "/assets/banner_1.svg";
import banner2 from "/assets/banner_2.svg";
import banner3 from "/assets/banner_3.svg";
import { Button, Typography } from "@material-tailwind/react";

function Banner() {
  const photoUrl =
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80";
  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3">
      <div
        className={
          "h-96 bg-[url(" +
          photoUrl +
          ")] bg-cover flex justify-center items-end"
        }
      >
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Scopri di più
        </Button>
      </div>
      <div
        className={
          "bg-[url(" + photoUrl + ")] bg-cover flex justify-center items-end"
        }
      >
        <Button className=" bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
          Crea <br /> offerta di lavoro
        </Button>
      </div>
      <div
        className={
          "bg-[url(" + photoUrl + ")] bg-cover flex justify-center items-end"
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
