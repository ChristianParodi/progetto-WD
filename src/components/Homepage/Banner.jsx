import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import bannerCreaOfferta from "/bgCreaOfferta.svg";
import bannerCreaPortfolio from "/bgCreaPortfolio.svg";

function Banner() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: "url(" + bannerCreaOfferta + ")",
              width: "100%",
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primaryUnclicked"
              sx={{ color: "white" }}
            >
              crea <br />
              offerta di lavoro
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: "url(" + bannerCreaPortfolio + ")",
              width: "100%",
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primaryUnclicked"
              sx={{ color: "white" }}
            >
              crea <br />
              portfolio
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Banner;
