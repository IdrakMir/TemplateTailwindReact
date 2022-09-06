import Image from "next/image";
import React, { useState } from "react";
import t from "../Translation";
import card from "../../data/cards.json";
import StarsSvg from "../vector_components/StarsSvg";
import HalfStarSvg from "../vector_components/HalfStarSvg";

const Card = (props) => {
  const {
    bgColor,
    imageUrl,
    title,
    description,
    rating,
    price,
    courseName,
    textColor,
  } = props;
  const [active, setActive] = useState(false);
  return (
    <div className="flex select-none">
      <div
        className="relative w-20 h-[320px] bg-white rounded-3xl -rotate-[10deg] flex justify-center items-center ml-10 z-10 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <div className="w-14 h-[280px] bg-lightgreen rounded-3xl flex justify-center items-center">
          <div
            className={`w-10 h-[180px] rounded-full flex justify-center items-center hover:w-full hover:h-full duration-500`}
            style={{ background: bgColor }}
          >
            <p
              className="rotate-90 whitespace-nowrap font-semibold"
              style={{ color: textColor }}
            >
              {courseName}
            </p>
          </div>
        </div>
      </div>
      <div
        className={[
          "duration-500 flex h-[310px] overflow-hidden space-x-3 rounded-3xl",
          active
            ? "w-[492px] p-4 border-2 border-blue opacity-100"
            : "w-0 opacity-0",
        ].join(" ")}
      >
        <div className="relative min-w-[210px] rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt="CourseLogo"
          />
        </div>
        <div className="w-[270px] flex flex-col justify-between">
          <h2 className="font-semibold flex justify-center mb-6">{title}</h2>
          <p className="text-grey w-full h-40">{description}</p>
          <div>
            <div className="flex mb-3 justify-center items-center">
              <div className="flex">
                {Number.isInteger(rating) ? (
                  [...Array(rating)].map((_, i) => (
                    <StarsSvg
                      key={i}
                      className={"w-[30px] h-[30px] fill-darkyellow"}
                    />
                  ))
                ) : (
                  <>
                    {[...Array(Math.floor(rating))].map((_, i) => (
                      <StarsSvg
                        key={i}
                        className={"w-[30px] h-[30px] fill-darkyellow"}
                      />
                    ))}
                    <HalfStarSvg
                      className={
                        "w-[30px] h-[30px] HalfStar fill-darkyellow stroke-transparent"
                      }
                    />
                  </>
                )}
                {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                  <StarsSvg
                    key={i}
                    className={"w-[30px] h-[30px] fill-yellow"}
                  />
                ))}
              </div>
              <p className="font-semibold text-xl">${price}</p>
            </div>
            <div className="flex justify-center">
              <button className="border-2 border-blue w-3/4 rounded-xl h-[35px] font-semibold hover:bg-blue hover:text-white hover:duration-500">
                {t("explore")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
