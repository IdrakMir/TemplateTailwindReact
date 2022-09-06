import React from "react";
import t from "../Translation";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="text-6xl flex justify-center mt-10 font-semibold">
            {t("privacy_policy")}
          </h1>
        </div>
        <div className="my-14">
          <h2 className="text-2xl font-semibold mb-4">{t("pp_title1")}</h2>
          <p className="text-lg">{t("pp_description1")}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t("pp_title2")}</h2>
          <p className="text-lg">{t("pp_description2")}</p>
        </div>
        <div className="my-14">
          <h2 className="text-2xl font-semibold mb-4">{t("pp_title3")}</h2>
          <p className="text-lg">{t("pp_description3")}</p>
          <p className="text-lg">
            1) ANIS COIN sales <br />2) Transaction fees across the entire ANISLAND
            universe <br />3) ANISLAND office sales <br />4) Commissions from ANISLAND 2d
            Platform integration <br />5) From the sales centers of ANISLAND
            E-commerce sites <br />6) Big business center room sales <br />7) Housing, Villa
            Sale <br />8) City land sale <br />9) Entrance fees to museums and other
            performance centers <br />10) Advertisement of brand store <br />11) ANIS NFTs
            <br />12) Entrance fees to concerts <br />13) NFT sales of big bran <br />14) Event
            sponsorship Because this list is too long, we did not list them all.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
