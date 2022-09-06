import Image from 'next/image'
import React, { useState } from 'react'
import t from '../Translation'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from './Card'
import cards from "../../data/cards.json";


const CoursesCards = () => {
const [mySwiper, setMySwiper] = useState(null);
  return (
    <div className="relative pt-32">
        <div className="absolute top-0 left-0 bg-brightnesyellow w-9/12 h-[710px]"></div>
        <div className="container mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl font-bold relative after:block w-fit after:w-3/4 after:h-[15px]  after:bg-brigthnesblue after:absolute after:bottom-0 ml-3 after:-left-1 after:-z-10 mb-2">
              {t("all_course")}
            </h2>
            <h3 className="text-2xl text-grey ml-3">
              {t("all_courses_description")}
            </h3>
          </div>
          <div className="w-full h-[400px] mb-4">
            <div className="flex mb-14">
              <h2 className="text-2xl ml-2 whitespace-nowrap">{t("course_type_title1")}</h2>
              <button className="text-xl text-blue flex ml-[80%] whitespace-nowrap items-center">
                {t("see_all")}
                <Image
                  src={"/vectors/rightarrow.svg"}
                  width={26}
                  height={26}
                  alt="Arrow"
                />
              </button>
            </div>
            <div className="w-full overflow-hidden h-[400px] ml-7 relative after:block after:w-full after:h-[75px]  after:bg-lightgrey after:absolute after:bottom-0  after:-z-10 after:rounded-full after:top-64 cursor-pointer">
              <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => setMySwiper(swiper)}
              >
                {cards.map((card) => (
                  <SwiperSlide className="!w-auto" key={card.id}>
                    <Card
                    textColor={card.textColor}
                      bgColor={card.bgColor}
                      imageUrl={card.imageUrl}
                      title={card.title}
                      description={card.description}
                      rating={card.rating}
                      price={card.price}
                      courseName={card.courseName}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CoursesCards