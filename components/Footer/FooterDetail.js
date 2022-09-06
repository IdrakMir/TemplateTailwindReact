import Link from "next/link";
import React from "react";
import footer from "../../data/footer.json"
const FooterDetail = (props) => {
const { title,routes } = props;
  return (
    <div className="mx-10">
      <h2 className="text-lg text-blue font-medium">{title}</h2>
      {routes.map((route) =>(
      <Link href={route.link}>
        <a
          className="block text-grey hover:text-blue4 text-base whitespace-nowrap mt-5"
          target="_blank"
        >
          {route.name}
        </a>
      </Link>
      ))}
    </div>
  );
};

export default FooterDetail;
