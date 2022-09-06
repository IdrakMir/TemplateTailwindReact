import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import t from "../Translation";
import newscard from "../../data/new.json";
import NewCard from './NewCard';

const News = () => {
const [mySwiper, setMySwiper] = useState(null)

  return (
    <div className="container mx-auto">
        <div className="mb-12">
          <div className="flex justify-center">
            <h2 className="flex justify-center relative text-5xl font-medium w-fit after:w-3/4 after:h-[15px]  after:bg-blue3 after:absolute after:bottom-0 mx-auto after:-z-10 mb-4">
              {t("news")}
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="text-2xl text-grey">{t("news_descrip")}</p>
          </div>
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setMySwiper(swiper)}
        >
            {newscard.map((news) => (
            <SwiperSlide className="pt-12" key={news.id}>
              <NewCard
                description={news.description}
                name={news.name}
                post={news.post}
              />
            </SwiperSlide>
          ))}
          
        </Swiper>
        <div className="mb-56"></div>
      </div>
  )
}

export default News