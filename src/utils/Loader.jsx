import { Spinner } from "@material-tailwind/react";
import React from "react";

function Loader({ isLoading }) {
  return (
    isLoading && (
      <div className="z-[9999] fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-400 bg-opacity-90 backdrop-filter backdrop-blur-md"></div>
        <Spinner className="h-14 w-14" />
      </div>
    )
  );
}

export default Loader;
