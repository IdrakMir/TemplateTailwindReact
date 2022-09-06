import React from 'react'
import Image from 'next/image'
import SettingsSvg from '../vector_components/SettingsSvg'
import t from '../Translation'
import Link from 'next/link';

const TheHeader = () => {
  return (
    <div className="header w-full relative z-50">
        <div className="headerContainer container mx-auto">
          <div className="headerLeft flex bg-transparent">
            <div className="logoName flex items-center">
              <Image src="/images/pylogo.png" width={245} height={80} alt="py logo" />
            </div>

            <ul className="flex whitespace-nowrap gap-[46px] text-lg items-center mx-4 font-bold">
              <li className="header_navigation"><Link href="/"><a>{t("home")}</a></Link></li>
              <li className="header_navigation"><Link href="/contact_us"><a>{t("contacts_us")}</a></Link></li>
              <li className="header_navigation"><Link href="/about"><a>{t("about")}</a></Link></li>
              <li className="header_navigation"><Link href="/my_lessons"><a>{t("my_lessons")}</a></Link></li>
            </ul>

            <div className="flex headerRight items-center ml-auto [&>g]hover:fill-grey">
              {/* <button ><Image src="/vectors/setting.svg" width={30} height={30} alt="Setting" /></button> */}
              <SettingsSvg className={"w-[30px] h-[30px] fill-black cursor-pointer hover:fill-blue2 hover:duration-500"} />
            </div>
          </div>

        </div>
      </div>
  )
}

export default TheHeader