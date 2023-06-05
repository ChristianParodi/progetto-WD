import React from "react";

const Input = React.forwardRef(({ className, ...otherProps }, ref) => {
  const newClassName =
    "border border-gray-400 rounded-[39px] p-5 focus:outline-2 focus:outline-[#f57a07] text-lg placeholder-gray-600 font-500";
  const combinedClassNames = className
    ? newClassName + " " + className
    : newClassName;
  return <input ref={ref} className={combinedClassNames} {...otherProps} />;
});

export default Input;
