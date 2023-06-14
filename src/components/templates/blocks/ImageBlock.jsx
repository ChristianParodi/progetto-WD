import { Button } from "@material-tailwind/react";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { forwardRef, useRef, useState } from "react";

const ImageBlock = forwardRef(
  ({ className, iconProps, ...otherProps }, ref) => {
    const newClassName =
      "rounded-lg min-h-min w-[80%] flex justify-center bg-gray-400 hover:bg-primaryUnclicked hover:bg-opacity-80 text-black shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 duration-200 bg-cover bg-center cursor-pointer";

    const combinedClassNames = className
      ? `${newClassName} ${className}`
      : newClassName;

    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleClick = () => fileInputRef.current.click();
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

    return (
      <>
        <div
          onClick={handleClick}
          ref={ref}
          {...otherProps}
          color="blue"
          className={combinedClassNames}
          style={{
            backgroundImage: `url(${image ? URL.createObjectURL(image) : ""})`,
          }}
        >
          {!image && <PhotoIcon className={iconProps || "w-8"} />}
        </div>
        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          type="file"
          className="hidden"
        />
      </>
    );
  }
);

export default ImageBlock;
