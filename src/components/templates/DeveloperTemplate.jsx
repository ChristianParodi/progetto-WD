import {
  Button,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import React, { forwardRef, useRef, useState } from "react";

import {
  PlusIcon,
  PhotoIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { VscTextSize, VscFile } from "react-icons/vsc";

const AddMediaButton = forwardRef(
  ({ className, iconProps, ...otherProps }, ref) => {
    const newClassName =
      "h-min w-[80%] flex justify-center bg-gray-400 hover:bg-primaryUnclicked hover:bg-opacity-80 text-black shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 duration-200";

    const combinedClassNames = className
      ? `${newClassName} ${className}`
      : newClassName;
    return (
      <Button
        ref={ref}
        {...otherProps}
        ripple={false}
        color="blue"
        className={combinedClassNames}
      >
        <PlusIcon className={iconProps || "w-8"} />
      </Button>
    );
  }
);

const ChoiceDialog = ({ clickedBlock, open, handler }) => {
  return (
    <Dialog open={open} handler={handler}>
      <DialogBody className="w-full h-full">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3">
            <PhotoIcon className="w-24" />
            <Typography>Immagine</Typography>
          </div>
          <div className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3">
            <VscTextSize className="text-[6rem] w-32" />
            <Typography>Testo</Typography>
          </div>
          <div className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3">
            <CodeBracketIcon className="w-24" />
            <Typography>Codice</Typography>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3">
            <LinkIcon className="w-24" />
            <Typography>Link</Typography>
          </div>
          <div className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3">
            <VscFile className="text-[6rem] w-24" />
            <Typography>File</Typography>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

function DeveloperTemplate({ project }) {
  const [clickedBlock, setClickedBlock] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  const blocks = [];
  for (let i = 0; i < 6; i++) blocks.push(useRef(null));

  return (
    <div className="h-[100vh] flex justify-center">
      <div className="w-[80%] border-2 flex flex-col items-center py-5 gap-4">
        <AddMediaButton
          key={blocks[0]}
          onClick={() => {
            setClickedBlock(0);
            handleOpen();
          }}
        />
        <div className="w-[80%] flex gap-4">
          <ChoiceDialog
            clickedBlock={clickedBlock}
            open={open}
            handler={handleOpen}
          />
          <AddMediaButton
            ref={blocks[1]}
            className="h-96 flex items-center"
            iconProps="w-16"
            onClick={() => {
              setClickedBlock(1);
              handleOpen();
            }}
          />
          <AddMediaButton
            ref={blocks[2]}
            className="h-96 flex items-center"
            iconProps="w-16"
            onClick={() => {
              setClickedBlock(2);
              handleOpen();
            }}
          />
        </div>
        <div className="w-[80%] flex gap-4">
          <AddMediaButton
            ref={blocks[3]}
            className="h-96 flex items-center"
            iconProps="w-16"
            onClick={() => {
              setClickedBlock(3);
              handleOpen();
            }}
          />
          <AddMediaButton
            ref={blocks[4]}
            className="h-96 flex items-center"
            iconProps="w-16"
            onClick={() => {
              setClickedBlock(4);
              handleOpen();
            }}
          />
        </div>
        <AddMediaButton
          ref={blocks[5]}
          className="h-96 flex items-center"
          iconProps="w-16"
          onClick={() => {
            setClickedBlock(5);
            handleOpen();
          }}
        />
      </div>
    </div>
  );
}

export default DeveloperTemplate;
