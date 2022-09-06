import React from "react";
import update from "../../data/latestupdate.json";

const Update = (props) => {
  const { title, description, date, onClick } = props;
  const split = date.split(" ");
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className="w-24 h-24 rounded-xl absolute bg-darkyellow2 rotate-45 after:absolute after:-left-3 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-10 after:rounded-xl after:bg-darkyellow -z-10 -top-10 -left-10"></div>
      <div className="flex mr-10 h-20 mb-20">
        <div className="mr-1 w-3/4">
          <p className="text-grey text-2xl">{title}</p>
          <p className="font-semibold text-2xl">{description}</p>
        </div>
        <div>
          {split.map((d) => (
            <p className="text-grey text-2xl">{d}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Update;
