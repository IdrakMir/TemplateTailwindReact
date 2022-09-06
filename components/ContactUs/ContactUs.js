import Link from "next/link";
import React, { useCallback, useState, useEffect, useRef } from "react";
import Input from "../Input";
import t from "../Translation";

const ContactUs = () => {

  return (
    <div>
      <div className="mt-7 mb-16">
        <h1 className="flex justify-center font-semibold text-5xl text-blue">
          {t("contact_us_title")}
        </h1>
        <h2 className="flex justify-center font-medium text-2xl text-grey mt-[16px] w-[60%] mx-auto text-center">
          {t("contact_us_description")}
        </h2>
      </div>
      <div>
        <form className="w-full max-w-[804px] mx-auto">
          <div className="flex gap-x-6 justify-between mx-auto mb-10">
            <Input placeholder={t("enter_name")} maxLength={32}/>
            <Input placeholder={t("enter_email")} maxLength={32} type={"email"}/>
            
          </div>
          <div className="flex gap-x-6 justify-between mx-auto mb-10">
            <Input placeholder={t("enter_number")} type={"number"} maxLength={32}/>
            <Input placeholder={t("enter_company")} maxLength={32}/>
          </div>
          <div>
            <Input placeholder={t("enter_message")} maxLength={64} className={"w-[804px] h-28"} />
          </div>
          <div className="flex mt-20 justify-around">
            <div className="relative flex justify-center items-center -left-[8%] ">
              <input
                type="checkbox"
                name="Accept"
                id="3"
                className="w-7 h-7 mr-4"
              />
              <div>
                <p>{t("accept_privacy")}</p>
                <Link href={"/privacy_policy"}>
                  <a className="text-blue ">{t("service_privacy_policy")}</a>
                </Link>
              </div>
            </div>
            <div>
              <button className="w-[207px] h-10 border border-blue bg-blue4 font-bold text-sm text-white rounded-[10px] uppercase hover:shadow-2xl hover:text-base duration-300">
                {t("send_message")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
