import { Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

function Loader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return isLoading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <Spinner className="h-14 w-14" />
    </div>
  ) : (
    children
  );
}

export default Loader;
