import Image from 'next/image'
import React from 'react'
import t from "../Translation";


const AboutUs = () => {
  return (
    <div className="flex w-full container mx-auto my-32">
        <div className="w-1/2">
          <Image
            src="/images/About.png"
            layout="responsive"
            width={672}
            height={348}
            priority
            alt="Banner"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold relative after:block w-fit after:w-3/4 after:h-[15px]  after:bg-yellow after:absolute after:bottom-0  after:-left-1 after:-z-10 mb-2">
            {t("about_us")}
          </h2>
          <p className="w-2/3 text-lg font-medium text-grey">
            {t("About_Us_Description")}
          </p>
          <div className='flex w-[160px] h-[40px] mt-5'>
            <button className=" text-lg border w-full h-full border-darkyellow bg-darkyellow text-white rounded-xl hover:shadow-2xl hover:text-xl duration-200">{t("read_more")}</button>
          </div>
        </div>
      </div>
  )
}

export default AboutUs