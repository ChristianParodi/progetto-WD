import React, { createContext, useContext } from "react";
import HeaderLogin from "./HeaderLogin";
import Form from "./Form";
import loginGif from "/assets/login_gif.svg";
import { UserContext } from "../context/AuthProvider";
import { Alert } from "@material-tailwind/react";

function Login() {
  const { user } = useContext(UserContext);
  return (
    <>
      {user && (
        <Alert>
          ciao {user.nome} {user.cognome}
        </Alert>
      )}
      <HeaderLogin />
      <main className="flex flex-col md:flex-row items-center justify-around w-full h-full pt-6 md:pt-16">
        <Form />
        <img
          src={loginGif}
          alt="gif"
          className="hidden lg:block w-[50%] lg:w-[30%] min-w-[30rem]"
        />
      </main>
    </>
  );
}

export default Login;
