import { Button, Typography } from "@material-tailwind/react";
import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-1 grid-rows-2 bg-[#ff9900] w-full pt-6">
      <div className="flex flex-col items-end justify-end gap-2 my-auto">
        <div className="flex flex-col items-center justify-center">
          <Typography variant="h6" className="mx-6 w-64">
            Bisogno di aiuto?
          </Typography>
          <Typography variant="paragraph" className="mx-6 w-64">
            Se hai un dubbio o hai un problema, non devi fare altro che
            scriverci.
          </Typography>
          <Button className="normal-case bg-secondaryUnclicked active:bg-secondaryClicked focus:bg-secondaryClicked rounded-full mb-6">
            Vai al supporto
          </Button>
        </div>
      </div>
      <div className=" flex justify-center items-end text-center">
        <Typography variant="h6" className="mx-6">
          © 2023 - Unige Dad. Tutti i diritti riservati. Informativa sulla
          privacy
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
