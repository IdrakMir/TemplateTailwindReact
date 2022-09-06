import React from "react";
import t from "../Translation";
import aboutus from "../../data/aboutus.json";

const AboutUsPage = (props) => {
const { description } = props
  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center my-16 text-6xl font-semibold">
        {t("about")}
      </h1>
      <p className="text-grey font-medium w-3/4 flex justify-center mx-auto">{aboutus.description}</p>
    </div>
  );
};

export default AboutUsPage;
