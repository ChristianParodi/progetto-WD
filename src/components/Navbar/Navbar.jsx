import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logoWork from "/logo.svg";

function Navbar() {
  return (
    <Box sx={{ bgcolor: "white", color: "black", m: 0 }} position="relative">
      <Toolbar sx={{ p: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sx={{ mt: 2 }}>
            <img src={logoWork} alt="logo" />
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                mr: 2,
                color: "black",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Accedi
            </Button>
            <Button
              variant="text"
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Registrati
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
}

export default Navbar;
