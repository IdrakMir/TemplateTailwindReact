import React from "react";
import Image from "next/image";
import t from "../Translation";
import Link from "next/link";
import HalfStarSvg from "../vector_components/HalfStarSvg";
import StarsSvg from "../vector_components/StarsSvg";
import Lessons from "../../data/lesson.json";

const Lesson = (props) => {
  const {
    image_url,
    title,
    description,
    rating,
    sales_count,
    price,
    lesson_url,
    category,
  } = props;

  return (
    <>
      <div className="relative w-[316px] h-[446px] border border-blue rounded-2xl p-4">
        <div className="flex justify-center">
          <Image src={image_url} width={290} height={190} responsive />
        </div>
        <div>
          <span className="flex text-center text-base font-medium my-2 justify-center">
            {title}
          </span>
          <p className="flex text-center text-xs text-grey font-medium pt-0 h-[64px]">
            {description}
          </p>
        </div>
        <div className="flex justify-around pt-7">
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
          <p className="text-xs flex items-start text-grey">({sales_count})</p>
          <span className="text-xl font-semibold">${price}</span>
        </div>
        <div className="flex">
          <div className="relative -bottom-4 ">
            <Link href={lesson_url}>
              <a
                target={"_blank"}
                className="border border-blue4 w-72 h-12 rounded-xl flex justify-center items-center hover:bg-blue4 hover:text-white cursor-pointer hover:font-semibold duration-300"
              >
                {t("see_detail")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson;
