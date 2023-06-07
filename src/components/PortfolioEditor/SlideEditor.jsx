import React, { useState } from "react";
import Navbar from "../Navbar";
import {
  Typography,
  List,
  ListItem,
  Card,
  Button,
} from "@material-tailwind/react";

const Sidebar = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-col items-start">
      <Button
        onClick={() => setSelected(() => 1)}
        variant="text"
        className={`bg-${
          selected === 1 ? "primaryClicked" : "inherit"
        } text-[16px] normal-case t-6 p-5 text-primaryUnclicked  my-auto w-32 text-left`}
      >
        Sfondo
      </Button>
      <Button
        onClick={() => setSelected(() => 2)}
        variant="text"
        className={`bg-${
          selected === 2 ? "primaryClicked" : "inherit"
        } text-[16px] normal-case t-6 p-5 text-primaryUnclicked  my-auto w-32 text-left`}
      >
        Immagini
      </Button>
      <Button
        onClick={() => setSelected(() => 3)}
        variant="text"
        className={`bg-${
          selected === 3 ? "primaryClicked" : "inherit"
        } text-[16px] normal-case t-6 p-5 text-primaryUnclicked  my-auto w-32 text-left`}
      >
        Testi
      </Button>
    </div>
  );
};
function SlideEditor() {
  const [background, setBackground] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [nPage, setNPage] = useState(1);

  const handleBackgroundChange = (e) => {
    // Gestisci il cambiamento dello sfondo
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setBackground(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    // Gestisci il cambiamento dell'immagine
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (e) => {
    // Gestisci il cambiamento del testo
    setText(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="flex p-6">
        <div className="w-1/3">
          <Typography variant="h6">Pagina {nPage}</Typography>
          <Sidebar />
        </div>
        <div className="w-2/3">v</div>
      </div>
      <div className="slide-editor-container">
        <input type="file" onChange={handleBackgroundChange} />
        <input type="file" onChange={handleImageChange} />
        <textarea value={text} onChange={handleTextChange} />

        <div className="preview-slide">
          <div
            className="slide"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src={image} alt="Slide Image" />
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideEditor;
