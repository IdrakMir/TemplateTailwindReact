import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SelectLang from "../Locales/SelectLanguage";
import footer from "../../data/footer.json";
import Detail from "../Footer/FooterDetail"
import t from '../Translation';
const Footer = () => {
  return (
    <div className="relative mt-40">
        <div className="relative flex justify-between z-50 mx-auto container pb-12">
          <div>
            <div>
              <Image
                src={"/images/pylogo.png"}
                width={186}
                height={56}
                alt={"Logo"}
              />
            </div>
            <div className="w-[275px] h-[70] mt-5 mb-8">
              <span className="text-base text-grey">
                {t("footer_desctription")}
              </span>
            </div>
            <div>
              <span className="text-base">© {t("footer_title")}</span>
            </div>
          </div>
          <div className="flex w-[45%] justify-center">
            {footer.map((foot) =>(
                <Detail 
                key={foot.id}
                title={foot.title}
                routes={foot.routes}
                />
            ))}
          </div>
          <div>
            <div className="flex">
              <div className="flex w-[40px] h-[40px] rounded-full bg-brightnesgrey justify-center items-end mx-[9px] hover:bg-lightgrey">
                <Link href="">
                  <a>
                    <Image
                      src={"/vectors/facebook.svg"}
                      width={25}
                      height={25}
                      fill
                      alt={"SocialMedia"}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex w-[40px] h-[40px] rounded-full bg-brightnesgrey justify-center items-end mx-[9px] hover:bg-lightgrey">
                <Link href="">
                  <a>
                    <Image
                      src={"/vectors/linkedin.svg"}
                      width={25}
                      height={25}
                      fill
                      alt={"SocialMedia"}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex w-[40px] h-[40px] rounded-full bg-brightnesgrey justify-center items-end mx-[9px] hover:bg-lightgrey">
                <Link href="">
                  <a>
                    <Image
                      src={"/vectors/twiter.svg"}
                      width={25}
                      height={25}
                      fill
                      alt={"SocialMedia"}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex w-[40px] h-[40px] rounded-full bg-brightnesgrey justify-center items-end mx-[9px] hover:bg-lightgrey">
                <Link href="">
                  <a>
                    <Image
                      src={"/vectors/instagram.svg"}
                      width={25}
                      height={25}
                      fill
                      alt={"SocialMedia"}
                    />
                  </a>
                </Link>
              </div>
            </div>

            <SelectLang />
          </div>
        </div>
        <div className="absolute bottom-0  w-full h-44 overflow-hidden z-10">
          <Image src={"/images/end.png"} layout="fill" alt={"FooterPicture"} />
        </div>
      </div>
  )
}

export default Footer