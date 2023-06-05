import React from "react";
import Navbar from "../Navbar";
import Banner from "./Banner";
import Search from "./Search";
import { Typography } from "@material-tailwind/react";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Search />
      <div className="flex justify-center items-center mt-20 mx-10">
        <Typography variant="h6">
          Cerca le cose belle che ci sono in questo sito come i portfoli di
          tutti i tuoi amici
        </Typography>
      </div>
      {/* Portfoli */}
    </>
  );
}

export default Homepage;
