import Image from "next/image";
import React from "react";
import t from "../Translation";

const Subcribe = () => {
  return (
    <div className="relative mt-[20%]">
      <div className="relative flex -top-10 left-8 z-50">
        <Image
          src={"/images/footer.png"}
          width={486}
          height={284}
          alt={"Subcriber"}
        />
      </div>
      <div className="relative z-50">
        <div className="flex justify-center">
          <p className="font-bold text-3xl">{t("subscribe_title")}</p>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-base text-grey w-1/3 h-12 text-center">
            {t("subscribe_descpition")}
          </p>
        </div>
        <div className="flex justify-center mt-9">
          <form className="flex w-1/3 h-12 border-grey border rounded-2xl items-center justify-center">
            <input
              type="email"
              placeholder={t("enter_mail")}
              className="flex w-3/4 bg-transparent items-center outline-none pl-4"
            />
            <div className="relative flex w-[120px] h-[30px] items-center justify-center bg-blue4 rounded-md shadow-xl hover:shadow-2xl">
              <button className="text-sm text-white font-medium hover:text-base duration-300">
                {t("subsribe")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
