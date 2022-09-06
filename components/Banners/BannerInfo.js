import React from "react";
import t from "../Translation";
import bannerInfos from "../../data/bannerInfos.json";
import Image from "next/image";

const BannerInfo = () => {
  return (
    <div className="w-[856px] h-[516px] mx-auto mt-40">
      <div>
        <h1 className="flex justify-center relative text-4xl w-fit after:w-3/4 after:h-[15px]  after:bg-blue3 after:absolute after:bottom-0 mx-auto after:-z-10">
          {t("banner_info")}
        </h1>
        <h2 className="flex justify-center text-lg text-grey mt-3">
          {t("info_description")}
        </h2>
      </div>
      <div className="mt-8">
        <div className="grid lg:grid-cols-2 gap-y-4">
          {bannerInfos.map((info) => (
            <div
              className="w-full flex items-center mx-auto space-x-6"
              key={info.id}
            >
              <div className="relative min-w-[160px]">
                <Image
                  src={info.imageUrl}
                  layout="responsive"
                  width="1"
                  height="1"
                  alt="MainLogs"
                />
              </div>
              <div className="block space-y-2">
                <h1 className="text-4xl">{t(info.title)}</h1>
                <p className="text-xl">{t(info.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
