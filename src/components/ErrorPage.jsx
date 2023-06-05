import { Typography } from "@material-tailwind/react";
import React from "react";

function ErrorPage() {
  return (
    <Typography variant="h1" className="flex items-center justify-center m-6">
      Oops! sembra che la pagina richiesta non sia disponibile
    </Typography>
  );
}

export default ErrorPage;
