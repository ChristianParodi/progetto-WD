import React, { useRef } from "react";
import { Button } from "@material-tailwind/react";

export const FileInput = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={onChange}
      />
      <Button
        onClick={handleButtonClick}
        variant="text"
        className="normal-case focus:bg-inherit active:bg-inherit hover:bg-inherit text-primaryUnclicked"
      >
        Scegli sfondo
      </Button>
    </div>
  );
};
