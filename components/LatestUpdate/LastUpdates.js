import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import latestUpdate from "../../data/latestupdate.json";
import Update from "../LatestUpdate/Update";
import t from "../Translation";

const LastestUpdates = () => {
  const [play, setPlay] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const video = useRef(null);

  useEffect(() => {
    if (play) {
      video.current.play();
    } else {
      video.current.pause();
    }
  }, [play]);

  useEffect(() => {
    setVideoSrc(latestUpdate[0].videoUrl);
  }, []);
  return (
    <div className="w-full relative">
      <div className="container mx-auto z-20">
        <h2 className="text-4xl font-semibold  font-f relative after:block w-fit after:w-3/4 after:h-[15px]  after:bg-yellow after:absolute after:bottom-0  after:-left-1 after:-z-10 mb-2">
          {t("latest_update")}
        </h2>
        <p className="text-2xl text-grey font-medium">{t("update_title")}</p>
      </div>
      <div className="update"></div>
      <div className="absolute top-32 border-2 border- w-5/6 h-[710px] border-orange -z-10 rounded-r-[145px] border-l-0"></div>
      <div>
        <div className="flex pt-32 pb-24 pl-20 w-full h-[800px] overflow-hidden">
          <div className="flex flex-col space-y-1">
            {latestUpdate.slice(3).map((update) => (
              <Update
                key={update.id}
                title={update.title}
                description={update.description}
                date={update.date}
                onClick={() => setVideoSrc(update.videoUrl)}
              />
            ))}
          </div>
          <div className="w-1/2 h-[450px] relative top-[15%] right-4 group">
            <video
              muted
              src={videoSrc}
              ref={video}
              alt="LastUpdate"
              className="w-full h-full object-cover rounded-3xl shadow-2xl opacity-80 absolute"
            ></video>
            <div
              className={[
                "w-14 h-14 bg-white p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer duration-150 rounded-full hover:bg-white/50",
                play ? "opacity-0 group-hover:opacity-100" : "opacity-100",
              ].join(" ")}
              onClick={() => setPlay(!play)}
            >
              <Image
                src="/vectors/play.svg"
                width={22}
                height={22}
                alt="Play"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex top-[85%] left-20">
          <button className="text-2xl text-darkyellow font-bold">
            {t("more")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastestUpdates;
