import React from "react";
import Input from "../../utils/Input";
import { IconButton } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="flex items-center justify-center mt-10 gap-2">
      <Input placeholder="Cerca" className="min-w-[50%] h-12" />
      <IconButton
        size="md"
        className=" bg-primaryUnclicked active:bg-primaryClicked focus:bg-primaryClicked rounded-full"
      >
        <AiOutlineSearch size={"16"} />
      </IconButton>
    </div>
  );
}

export default Search;
