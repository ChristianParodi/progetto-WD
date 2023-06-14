import { createRoot } from "react-dom/client";

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

import ImageBlock from "./blocks/ImageBlock.jsx";

import { Editor } from "@tinymce/tinymce-react";

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

const ChoiceDialog = ({
  clickedBlock,
  blocks,
  open,
  handler,
  setClickedOperation,
}) => {
  return (
    <Dialog
      size="lg"
      className="max-h-[90vh] overflow-auto"
      open={open}
      handler={handler}
    >
      <DialogBody className="w-full h-full">
        <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
          <div
            onClick={() => {
              setClickedOperation("image");
              handler();
            }}
            className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3"
          >
            <PhotoIcon className="w-24" />
            <Typography>Immagine</Typography>
          </div>
          <div
            onClick={() => {
              setClickedOperation("text");
              handler();
            }}
            className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3"
          >
            <VscTextSize className="text-[6rem] w-32" />
            <Typography>Testo</Typography>
          </div>
          <div
            onClick={() => {
              setClickedOperation("code");
              handler();
            }}
            className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3"
          >
            <CodeBracketIcon className="w-24" />
            <Typography>Codice</Typography>
          </div>
        </div>
        <div
          onClick={() => {
            setClickedOperation("link");
            handler();
          }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <div className="flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3">
            <LinkIcon className="w-24" />
            <Typography>Link</Typography>
          </div>
          <div
            onClick={() => {
              setClickedOperation("file");
              handler();
            }}
            className="w-32 flex flex-col items-center hover:bg-gray-400 duration-200 cursor-pointer rounded-lg p-3"
          >
            <VscFile className="text-[6rem] w-24" />
            <Typography>File</Typography>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

const TinyEditor = forwardRef((props, ref) => {
  const tinyMceApiKey = import.meta.env.VITE_TINYMCE_API_KEY;

  return (
    <>
      <Editor
        apiKey={tinyMceApiKey}
        onInit={(evt, editor) => (ref.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          width: "80%",
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: `
            body { 
              font-family:Helvetica, Arial, sans-serif; 
              font-size: 14px;
              width: 80%; 
            } `,
        }}
      />
    </>
  );
});

function DeveloperTemplate({ project }) {
  const [clickedBlock, setClickedBlock] = useState(-1);
  const [clickedOperation, setClickedOperation] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  const editorRef = useRef(null);

  const blocks = [];
  const resDivs = [];
  for (let i = 0; i < 6; i++) {
    resDivs.push(useRef(null));
    blocks.push(useRef(null));
  }

  return (
    <div className="min-h-[100vh] flex justify-center">
      <div className="w-[80%] border-2 flex flex-col items-center py-5 gap-4">
        {clickedBlock === 0 && clickedOperation === "text" && (
          <>
            <TinyEditor ref={editorRef} />
            <Button
              onClick={() => {
                setClickedOperation("");
                resDivs[0].current.setHTML(editorRef.current.getContent());
              }}
            >
              Salva
            </Button>
          </>
        )}
        {clickedBlock === 0 &&
          clickedOperation === "image" &&
          resDivs[0].current.addClassList(`bg-url(${image})`)}
        <div
          onClick={() => {
            setClickedBlock(0);
            handleOpen();
          }}
          ref={resDivs[0]}
          className={
            resDivs[0].current?.innerHTML.trim() !== ""
              ? "prose h-min cursor-pointer"
              : "hidden"
          }
        ></div>
        <AddMediaButton
          ref={blocks[0]}
          onClick={() => {
            setClickedBlock(0);
            handleOpen();
          }}
          className={
            resDivs[0].current === null ||
            (resDivs[0].current?.innerHTML.trim() === "" &&
              clickedOperation === "")
              ? "flex"
              : "hidden"
          }
        />
        <div className="w-full flex flex-col md:flex-row md:w-[80%] items-center gap-4">
          <ChoiceDialog
            clickedBlock={clickedBlock}
            blocks={blocks}
            open={open}
            handler={handleOpen}
            setClickedOperation={setClickedOperation}
          />
          {clickedBlock === 1 && clickedOperation === "text" && (
            <>
              <TinyEditor ref={editorRef} />
              <Button
                onClick={() => {
                  setClickedOperation("");
                  resDivs[1].current.setHTML(editorRef.current.getContent());
                }}
              >
                Salva
              </Button>
            </>
          )}
          <div
            onClick={() => {
              setClickedBlock(1);
              handleOpen();
            }}
            ref={resDivs[1]}
            className={
              resDivs[1].current?.innerHTML.trim() !== ""
                ? "prose h-min cursor-pointer"
                : "hidden"
            }
          ></div>
          <AddMediaButton
            ref={blocks[1]}
            onClick={() => {
              setClickedBlock(1);
              handleOpen();
            }}
            className={
              resDivs[1].current === null ||
              resDivs[1].current?.innerHTML.trim() === ""
                ? "flex h-96 items-center" // Visibile
                : "hidden" // Invivisibile
            }
            iconProps="w-16"
          />
          <ImageBlock className="flex h-96 items-center" iconProps="w-24" />
          {/* {clickedBlock === 2 && clickedOperation === "text" && (
            <>
              <TinyEditor ref={editorRef} />
              <Button
                onClick={() => {
                  setClickedOperation("");
                  resDivs[2].current.setHTML(editorRef.current.getContent());
                }}
              >
                Salva
              </Button>
            </>
          )}
          <div
            onClick={() => {
              setClickedBlock(2);
              handleOpen();
            }}
            ref={resDivs[2]}
            className={
              resDivs[2].current?.innerHTML.trim() !== ""
                ? "prose h-min cursor-pointer"
                : "hidden"
            }
          ></div>
          <AddMediaButton
            ref={blocks[2]}
            onClick={() => {
              setClickedBlock(2);
              handleOpen();
            }}
            className={
              resDivs[2].current === null ||
              resDivs[2].current?.innerHTML.trim() === ""
                ? "flex h-96 items-center" // Visibile
                : "hidden" // Invivisibile
            }
            iconProps="w-16"
          /> */}
        </div>
        <div className="w-full flex flex-col md:flex-row md:w-[80%] items-center gap-4">
          {clickedBlock === 3 && clickedOperation === "text" ? (
            <>
              <TinyEditor ref={editorRef} />
              <Button onClick={() => setClickedOperation("")}>Salva</Button>
            </>
          ) : (
            <AddMediaButton
              ref={blocks[3]}
              className="h-96 flex items-center"
              iconProps="w-16"
              onClick={() => {
                setClickedBlock(3);
                handleOpen();
              }}
            />
          )}
          {clickedBlock === 4 && clickedOperation === "text" ? (
            <>
              <TinyEditor ref={editorRef} />
              <Button onClick={() => setClickedOperation("")}>Salva</Button>
            </>
          ) : (
            <AddMediaButton
              ref={blocks[4]}
              className="h-96 flex items-center"
              iconProps="w-16"
              onClick={() => {
                setClickedBlock(4);
                handleOpen();
              }}
            />
          )}
        </div>
        {clickedBlock === 5 && clickedOperation === "text" ? (
          <>
            <TinyEditor ref={editorRef} />
            <Button onClick={() => setClickedOperation("")}>Salva</Button>
          </>
        ) : (
          <AddMediaButton
            ref={blocks[5]}
            className="h-96 flex items-center"
            iconProps="w-16"
            onClick={() => {
              setClickedBlock(5);
              handleOpen();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default DeveloperTemplate;
