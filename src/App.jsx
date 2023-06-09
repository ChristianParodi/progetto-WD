import React, { useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import theme from "./theme";
import Loader from "./utils/Loader";

function App({ router }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    // <React.StrictMode>
    <AuthProvider>
      <ThemeProvider value={theme}>
        <Loader isLoading={isLoading} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
    // </React.StrictMode>
  );
}

export default App;
