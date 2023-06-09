import { useContext, useEffect, useRef, useState } from "react";
import { Card, Checkbox, Button, Typography } from "@material-tailwind/react";
import Input from "./../utils/Input";

import googleLogo from "/assets/google.svg";
import faceLogo from "/assets/facebook.svg";
import appleLogo from "/assets/apple.svg";

import base from "./../db/useAirtable";
import { UserContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [isChecked, setChecked] = useState(false);
  const { setUser } = useContext(UserContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const errorRef = useRef(null);
  const navigate = useNavigate();

  // Controlla il remember me
  useEffect(() => {
    const rememberUser = JSON.parse(localStorage.getItem("remember"));
    if (rememberUser) {
      setUser(rememberUser);
      navigate("/");
    }

    if (sessionStorage.getItem("user")) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
      navigate("/");
    }
  }, []);

  const handleClick = () => {
    const emailValue =
      emailRef.current.value?.trim().toLowerCase() || undefined;
    const passwordValue = passwordRef.current.value?.trim() || undefined;

    if (!emailValue || !passwordValue) {
      errorRef.current.classList.remove("hidden");
      errorRef.current.setHTML(
        "L'email e la password non possono essere vuoti"
      );
      return;
    }

    // Cerca l'utente
    base("utente")
      .select({
        filterByFormula: `email = '${emailValue}'`,
        maxRecords: 1,
        view: "Grid view",
      })
      .firstPage((err, records) => {
        if (err) console.log(err);
        const record = records[0];
        const fetchedUser = {
          recordId: record.id,
          ID: record.get("ID"),
          nome: record.get("nome"),
          cognome: record.get("cognome"),
          email: record.get("email"),
          nickname: record.get("nickname"),
          avatar: record.get("avatar")[0].url,
          bio: record.get("bio"),
        };
        setUser(fetchedUser);
        sessionStorage.setItem("user", JSON.stringify(fetchedUser));
        if (isChecked)
          // se la casella del remember me e' checked
          localStorage.setItem("remember", JSON.stringify(fetchedUser));
      });
    navigate("/");
  };

  return (
    <Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col xl:w-[600px]">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            onChange={() => errorRef.current?.setHTML("")}
            ref={emailRef}
            placeholder="Nome utente"
            type="email"
            className={"xl:w-[600px]"}
          />
          <Input
            onChange={() => errorRef.current?.setHTML("")}
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className={"xl:w-[600px]"}
          />
        </div>
        <Typography
          ref={errorRef}
          variant="lead"
          className="self-center hidden"
          color="red"
        >
          err
        </Typography>
        <div className="flex justify-between items-center xl:w-[600px]">
          <Checkbox
            checked={isChecked}
            onChange={(e) => setChecked(e.target.checked)}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Ricordami
              </Typography>
            }
            containerProps={{ className: "-ml-2.5 checked:bg-[#f57a07]" }}
          />
          <a
            href="#"
            className="self-right border-b  pb-[0.01rem] text-primaryUnclicked border-primaryUnclicked hover:border-primaryClicked hover:text-primaryClicked"
          >
            Password dimenticata?
          </a>
        </div>
        <Button
          onClick={handleClick}
          className="mt-6 w-32 self-center bg-primaryUnclicked active:bg-primaryClicked focus:bg-primaryClicked rounded-full p-5 text-lg"
        >
          Entra
        </Button>
        <Typography color="gray" className="mt-12 text-center font-normal">
          Oppure accedi con:
        </Typography>
        <div className="flex self-center gap-9 mt-5">
          <img src={googleLogo} alt="logo" className="cursor-pointer" />
          <img src={faceLogo} alt="logo" className="cursor-pointer" />
          <img src={appleLogo} alt="logo" className="cursor-pointer" />
        </div>
        <Typography color="gray" className="mt-12 text-center font-normal">
          Non hai ancora un account?{" "}
          <a
            href="#"
            className="border-b text-primaryUnclicked border-primaryUnclicked hover:border-primaryClicked hover:text-primaryClicked pb-[0.01rem]"
          >
            Registrati
          </a>
        </Typography>
      </form>
    </Card>
  );
}
