import { Card, Checkbox, Button, Typography } from "@material-tailwind/react";

import Input from "./../utils/Input";

import googleLogo from "/assets/google.svg";
import faceLogo from "/assets/facebook.svg";
import appleLogo from "/assets/apple.svg";

export default function Form() {
  return (
    <Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col xl:w-[600px]">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            placeholder="Nome utente"
            type="email"
            className={"xl:w-[600px]"}
          />
          <Input
            type="password"
            placeholder="Password"
            className={"xl:w-[600px]"}
          />
        </div>
        <div className="flex justify-between items-center xl:w-[600px]">
          <Checkbox
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
            className="self-right border-b border-gray-600 pb-[0.01rem] hover:text-[#f57a07] hover:border-[#f57a07]"
          >
            Password dimenticata?
          </a>
        </div>
        <Button className="mt-6 w-32 self-center bg-primaryUnclicked active:bg-primaryClicked focus:bg-primaryClicked rounded-full p-5 text-lg">
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
            className="border-b border-gray-600 pb-[0.01rem] hover:text-[#f57a07] hover:border-[#f57a07]"
          >
            Registrati
          </a>
        </Typography>
      </form>
    </Card>
  );
}
