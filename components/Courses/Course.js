import Image from "next/image";
import React from "react";
import t from "../Translation";
import HalfStarSvg from "../vector_components/HalfStarSvg";
import StarsSvg from "../vector_components/StarsSvg";

const Course = (props) => {
  const { image, description, title, rating, price } = props;
  return (
    <div className="w-[230px] h-[370px] bg-white p-[10px] rounded-xl cursor-pointer">
      <div className="w-[205px] h-[125px] overflow-hidden mx-auto rounded-xl">
        <Image
          src={image}
          layout="responsive"
          width={300}
          height={200}
          alt="CourseLogo"
        />
      </div>
      <h2 className="font-semibold my-2 text-center text-lg">{title}</h2>
      <p className="text-xs text-center overflow-hidden h-24">{description}</p>
      <div className="flex my-2 h-8 justify-around">
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
            <StarsSvg key={i} className={"w-[30px] h-[30px] fill-yellow"} />
          ))}
        </div>
        <p className="font-semibold flex items-center text-xl">${price}</p>
      </div>
      <div className="flex justify-center align-bottom">
        <button className=" text-blue border-2 w-11/12 h-8 rounded-lg border-blue hover:bg-blue hover:text-white hover:duration-700 ">
          {t("see_detail")}
        </button>
      </div>
    </div>
  );
};

export default Course;
