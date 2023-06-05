import React from "react";
import Header from "./Header";
import Form from "./Form";
import loginGif from "/assets/login_gif.svg";

function Login() {
  return (
    <>
      <Header />
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
