import Link from "next/link";
import React from "react";
import t from "../Translation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Course from "./Course";
import courses from "../../data/courses.json";
import { useState } from "react";
import Image from "next/image";

const HomeCourses = () => {
  const [mySwiper, setMySwiper] = useState(null);
  return (
    <div className="relative pt-40">
      <div className="absolute top-0 left-0 w-11/12 h-[660px] bg-lightblue rounded-tr-[200px] -z-10"></div>
      <div className="container mx-auto flex justify-between">
        <div>
          <h2 className="text-2xl font-bold relative after:block w-fit after:w-3/4 after:h-[15px]  after:bg-yellow after:absolute after:bottom-0 mb-4 after:-z-10">
            {t("course_title")}
          </h2>
          <p className="text-grey text-xl mx-auto">{t("course_description")}</p>
        </div>
        <div className="flex justify-center items-center mr-[20%]">
          <Link href="/about">
            <a className="text-xl text-blue flex justify-center items-center">
              {t("see_all")}
              <Image
                src={"/vectors/rightarrow.svg"}
                width={26}
                height={26}
                alt="Arrow"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4">
          <Image
            src={"/images/coursemain.png"}
            layout="responsive"
            width={576}
            height={448}
            alt="Courses"
          />
        </div>
        <div className="relative w-[67%] flex  mr-auto items-center">
          <button
            className="w-[60px] h-[60px] rounded-full border bg-white"
            onClick={() => mySwiper.slidePrev()}
          >
            ❮
          </button>
          <div className="w-[90%] p-10 flex space-x-2 grid-cols-4">
            <Swiper
              spaceBetween={16}
              slidesPerView="auto"
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setMySwiper(swiper)}
            >
              {courses.map((course) => (
                <SwiperSlide className="!w-auto" key={course.id}>
                  <Course
                    image={course.imageUrl}
                    title={course.title}
                    description={course.description}
                    rating={course.rating}
                    price={course.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            className="w-[60px] h-[60px] rounded-full border bg-white"
            onClick={() => mySwiper.slideNext()}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
