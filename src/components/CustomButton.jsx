import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { css } from "@emotion/react";

function CustomButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  const buttonStyles = css`
    @keyframes shrink {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    animation: ${isClicked ? "shrink 0.2s" : "none"};
  `;

  return (
    <Button
      {...props}
      onClick={handleClick}
      css={buttonStyles}
      transition={"all 0.2s"}
      _hover={{ boxShadow: "xl" }}
      _focus={{ outline: "none" }}
      _active={{ outline: "none" }}
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
