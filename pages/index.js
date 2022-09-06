import BannerInfo from "../components/Banners/BannerInfo";
import HomeBanner from "../components/Banners/HomeBanner";
import CoursesCard from "../components/CourseCards/CoursesCards";
import AboutUs from "../components/AboutUs/AboutUs";
import News from "../components/News/News";
import Seo from "../components/Seo";
import Subscribe from "../components/Subscriber/Subcribe";
import "swiper/css";
import HomeCourses from "../components/Courses/HomeCourses";
import LastestUpdates from "../components/LatestUpdate/LastUpdates";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Seo title={"App Millers | Home Page"} />
      <div className="absolute left-0 z-40 -bottom-[420px] w-[95%] h-[885px] bg-lightblue rounded-[80px] -rotate-[10deg] pointer-events-none"></div>
      <HomeBanner />
      <BannerInfo />
      <HomeCourses />
      <CoursesCard />
      <AboutUs />
      <News />
      <LastestUpdates />
      <Subscribe />
    </>
  );
}
