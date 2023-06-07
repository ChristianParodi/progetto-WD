import React, { useState } from "react";
import Navbar from "../Navbar";
import { Typography } from "@material-tailwind/react";
import Input from "../../utils/Input";
import { Sidebar } from "./Sidebar";
import { FileInput } from "./FileInput";
import { PlusIcon } from "./PlusIcon";

function SlideEditor() {
  const [image, setImage] = useState("");
  const [nPage, setNPage] = useState(1);
  const [inputPos, setInputPos] = useState({ x: null, y: null });
  const [inputText, setInputText] = useState("");
  const [texts, setTexts] = useState([]);

  const handleTextClick = (e) => {
    const { clientX, clientY } = e;
    if (!inputPos?.active)
      setInputPos({ x: clientX, y: clientY, active: true });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputPos.active) {
      e.preventDefault();
      const newText = {
        x: inputPos.x,
        y: inputPos.y,
        text: inputText,
      };

      setTexts([...texts, newText]);
      console.log(texts);
      setInputText("");
      setInputPos({ x: null, y: null, active: false });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />
      <div className="flex p-6">
        <div className="w-[20%] h-[70vh]">
          <Typography variant="h4">Pagina {nPage}</Typography>
          <Sidebar nPage={nPage} setNPage={setNPage} />
        </div>
        <div
          onClick={handleTextClick}
          className="h-[70vh] w-[80%] border-2 border-gray-400 flex flex-col items-center justify-center"
        >
          {inputPos.x !== null && inputPos.y !== null && (
            <Input
              autoFocus
              type="text"
              value={inputText}
              className={`absolute border-2`}
              style={{
                left: inputPos.x,
                top: inputPos.y,
              }}
              onChange={(e) => setInputText(() => e.target.value)}
              onKeyDown={handleKeyDown}
            />
          )}
          {texts.map((text, index) => {
            <span className="absolute" key={index}>
              {text.text}
            </span>;
          })}
          {!image ? (
            <>
              <PlusIcon />
              <Typography variant="h6" className="text-textColor">
                Carica sfondo
              </Typography>
              <FileInput onChange={handleImageChange} />
            </>
          ) : (
            <img
              src={image}
              alt="Slide"
              className="w-full h-full object-fill"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SlideEditor;
