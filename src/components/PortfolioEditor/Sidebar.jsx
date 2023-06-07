import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";

export const Sidebar = ({ nPage, setNPage }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-col items-start h-full">
      <div className="flex flex-col items-start">
        <Button
          onClick={() => setSelected(() => 1)}
          variant="text"
          className={`bg-${
            selected === 1 ? "primaryClicked" : "inherit"
          } text-[16px] normal-case p-5 text-primaryUnclicked  w-32 text-left`}
        >
          Sfondo
        </Button>
        <Button
          onClick={() => setSelected(() => 2)}
          variant="text"
          className={`bg-${
            selected === 2 ? "primaryClicked" : "inherit"
          } text-[16px] normal-case p-5 text-primaryUnclicked   w-32 text-left`}
        >
          Immagini
        </Button>
        <Button
          onClick={() => setSelected(() => 3)}
          variant="text"
          className={`bg-${
            selected === 3 ? "primaryClicked" : "inherit"
          } text-[16px] normal-case p-5 text-primaryUnclicked  w-32 text-left`}
        >
          Testi
        </Button>
      </div>

      <Button
        onClick={() => setNPage(() => nPage + 1)}
        variant="filled"
        className="mt-auto normal-case rounded bg-secondaryClicked flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <AiOutlinePlus size={"32"} />
        Aggiungi pagina
      </Button>
    </div>
  );
};
