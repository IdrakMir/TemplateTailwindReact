import React from "react";
import t from "../Translation";
import Filters from "../Filters/Filters";
import Lesson from "./Lesson";
import lessons from "../../data/lesson.json";

const MyLessons = () => {
  return (
    <div className="mx-auto container">
      <div className="my-16">
        <h1 className="flex justify-center text-6xl font-semibold">
          {t("my_lessons_page")}
        </h1>
      </div>
      <div className="flex">
        <div className="w-1/4">
          <div className="w-[250px] h-[500px] border border-blue rounded-3xl sticky top-8 scroll">
            <div>
              <p className="relative flex justify-center  top-14 text-4xl font-semibold">
                {t("filter")}
              </p>
            </div>
            <div className="relative top-[20%] left-[4%] w-[230px] h-[205px] bg-transparent rounded-2xl py-8 px-5 border border-blue overflow-y-auto">
              <ul>
                <Filters />
              </ul>
            </div>
          </div>
        </div>
        <div cclassName="w-3/4">
          <div className=" grid grid-cols-3 gap-x-8 gap-y-10">
            {lessons.map((lesson) => (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                image_url={lesson.image_url}
                rating={lesson.rating}
                sales_count={lesson.sales_count}
                price={lesson.price}
                lesson_url={lesson.lesson_url}
                category={lesson.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLessons;
