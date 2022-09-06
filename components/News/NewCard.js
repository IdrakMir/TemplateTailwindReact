import Image from "next/image";
import React from "react";

const NewCard = (props) => {
  const { description, name, post } = props;
  return (
      <div className="relative max-w-xl mx-auto">
        <div className="w-36 h-28 absolute -top-12 left-4">
          <Image
            src="/images/new.png"
            layout="responsive"
            width="100"
            height="100"
            alt="MainLogs"
          />
        </div>
        <div className="w-full h-64 border border-blue4 rounded-[40px] p-6 !pt-14 min-w-[615px]">
          <div>
            <p className="w-11/12 text-base">{description}</p>
          </div>
          <div className="mt-5">
            <div>
              <p className="text-base font-medium">{name}</p>
            </div>
            <div>
              <p className="text-sm text-grey">{post}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NewCard;
