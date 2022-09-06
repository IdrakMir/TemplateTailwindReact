import React, { useCallback, useState } from "react";
import t from "./Translation";

const Input = (props) => {
    const {placeholder, type,className, maxLength} = props
  const [active, setActive] = useState(false);

  const handler = useCallback((e) => {
    if (e.currentTarget.value != "") {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <div className="relative w-1/2 h-12">
      <input
        type={type}
        maxLength={maxLength}
        onFocus={() => setActive(true)}
        onBlur={handler}
        className={[
          "w-full h-full outline-none placeholder:duration-300 pl-6 border border-gray-400 rounded-lg",
          active ? "peer ring-2 ring-orange border-none" : "",
          className
        ].join(" ")}
      />
      <p className={["absolute left-[25px] duration-300 text-grey pointer-events-none", active ? "top-0 text-orange text-[11px]" : "top-1/4"].join(" ")}>
        {placeholder}
      </p>
    </div>
  );
};

export default Input;
