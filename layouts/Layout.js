import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer/Footer";
import TheHeader from "../components/TheHeader";
import Toast from "../components/toast/Toast";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={router.pathname == "/" ? "overflow-hidden" : ""}>
      <div className="w-full max-w-[2200px] h-[200vh] max-h-[1900px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lightblue -rotate-12 rounded-b-[80px]"></div>
      <div className="w-2/5 max-w-[600px] h-[300px] max-h-[1900px] absolute top-[-165px] right-[15px] bg-brigthnesblue -rotate-12 rounded-b-[65px]"></div>
      <TheHeader />
      <main className="relative min-h-[calc(100vh-339px)] max-w-[2200px] mx-auto z-10">
        {children}
      </main>
      <Footer />
      <Toast />
    </div>
  );
};

export default Layout;
