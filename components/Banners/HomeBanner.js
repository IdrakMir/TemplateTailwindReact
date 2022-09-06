import React from "react";
import Image from "next/image";
import t from "../Translation";

const HomeBanner = ({ title }) => {
  return (
    <>
      <div className="relative">
        <div className="relative w-full mt-40 container mx-auto">
          <div>
            <h1 className="text-5xl w-fit font-medium relative after:w-1/2 after:h-1/3 after:bg-yellow after:absolute after:-z-10 after:bottom-0 after:block mb-7">
              {t("banner_title")}
            </h1>
            <h2 className="text-3xl w-[596px] flex text-grey">
              {t("banner_description")}
            </h2>
          </div>
          <div className="mt-10 flex">
            <a href="" className="banner_detail">
              {t("more_info")}
            </a>
            <a href="" className="banner_detail ml-16">
              {t("see_detail")}
            </a>
          </div>
        </div>
        <div className="w-1/2 absolute right-0 top-1/2 -translate-y-1/2">
          <Image
            src="/images/banner.png"
            layout="responsive"
            width={735}
            height={366}
            priority
            alt="Banner"
          />
        </div>
      </div>
      <div className="flex justify-around mt-52 container mx-auto">
        <div>
          <a href="" className="banner_footer w-fit text-xl font-medium">
            {t("banner_prop_title1")}
          </a>
          <p className="font-medium">{t("banner_prop_description1")}</p>
        </div>
        <div>
          <a href="" className="banner_footer w-fit text-xl font-medium">
            {t("banner_prop_title2")}
          </a>
          <p className="font-medium">{t("banner_prop_description2")}</p>
        </div>
        <div>
          <a href="" className="banner_footer w-fit text-xl font-medium">
            {t("banner_prop_title3")}
          </a>
          <p className="font-medium">{t("banner_prop_description3")}</p>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
