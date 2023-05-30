import React from "react";
import Navbar from "./../Navbar/Navbar";
import Banner from "./Banner";
import { Stack, Typography } from "@mui/material";
import Ricerca from "./Ricerca";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography fontSize={"20px"} sx={{ my: "2em" }} variant="subtitle1">
          Ciao sono il tuo welcome blurb, please fill me
        </Typography>
        <Ricerca />
        <span>
          Cerca le cose belle che ci sono in questo sito come i portfoli di
          tutti i tuoi amici
        </span>
        {/* Lista portfoli */}
        {/* Footer */}
      </Stack>
    </>
  );
}

export default Homepage;
