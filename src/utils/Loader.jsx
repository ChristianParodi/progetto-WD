import { Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

function Loader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <Spinner className="h-14 w-14" />
    </div>
  ) : (
    React.Children.map(children, (child) => {
      if (React.isValidElement(child))
        return React.cloneElement(child, { onLoad: () => setIsLoading(false) });
      return child;
    })
  );
}

export default Loader;
