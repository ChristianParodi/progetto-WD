import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Ricerca() {
  return (
    <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
      <Button
        variant="contained"
        color="secondaryUnclicked"
        sx={{ color: "white" }}
      >
        lavoro
      </Button>
      <Button
        variant="contained"
        color="secondaryClicked"
        sx={{ color: "white" }}
      >
        portfolio
      </Button>
      <TextField
        variant="outlined"
        InputProps={{
          style: {
            borderRadius: "50px",
            minWidth: "400px",
            width: "100%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder="Cerca"
      />
    </Stack>
  );
}

export default Ricerca;
