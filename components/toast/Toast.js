import React from "react";
import toast from "../../store/ToastStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { ToastType } from "../../utils/ToastType";

const Toast = observer(() => {
  return (
    <div className="fixed bottom-5 right-5 w-4/5 min-h-[42px] max-w-[400px] flex flex-d flex-col-reverse items-end z-50">
      {toast.toastList.map(item => {
        const isSuccess = item.type == ToastType.success;
        const isError = item.type == ToastType.error;
        const successClass = "bg-success/50 border-success [&>div]:bg-success";
        const errorClass = "bg-error/50 border-error [&>div]:bg-error";
        const infoClass = "bg-info/50 border-info [&>div]:bg-info";

        return (
          <div
            key={item.id}
            className={["relative flex w-full mt-4 h-full pl-4 border rounded-lg overflow-hidden animate-toast", isSuccess ? successClass : isError ? errorClass : infoClass].join(" ")}
          >
            <div className="min-w-[50px] min-h-[50px] max-h-[50px] flex justify-center items-center my-3 mr-4 rounded-2xl" >

              <Image src={isSuccess ? "/vectors/check.svg" : isError ? "/vectors/error.svg" : "/vectors/info.svg"} width={36} height={36} alt={"toast type"} />
            </div>
            <p className="py-3 text-base text-white">{item.message}</p>
          </div>
        );
      })}
    </div>
  );
});

export default Toast;
