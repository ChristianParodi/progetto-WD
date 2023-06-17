import React, { useState } from "react";
import Input from "../../utils/Input";
import { IconButton } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ setSearch }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex items-center justify-center mt-10 gap-2">
      <Input
        placeholder="Cerca"
        className="min-w-[50%] h-12"
        onChange={(e) => {
          if (e.target.value === "") setSearch("");
          else setInputText(e.target.value);
        }}
      />
      <IconButton
        size="md"
        className=" bg-primaryUnclicked active:bg-primaryClicked focus:bg-primaryClicked rounded-full"
        onClick={() => setSearch(inputText)}
      >
        <AiOutlineSearch size={"16"} />
      </IconButton>
    </div>
  );
}

export default Search;
