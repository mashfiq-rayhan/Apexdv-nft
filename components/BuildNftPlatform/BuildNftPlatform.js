import React from "react";
import styles from "./BuildNftPlatform.module.css";

const BuildNftPlatform = () => {
  const data = [
    {
      id: 1,
      text: "Easy integration with 3rd party digital platforms.",
    },
    {
      id: 2,
      text: "Utterly identical to the actual world marketplace.",
    },
    {
      id: 3,
      text: "Digital assets are broadly portrayed.",
    },
    {
      id: 4,
      text: "Extensive business opportunities.",
    },
    {
      id: 5,
      text: "Smart Analytical Dashboard.",
    },
  ];
  return (
    <div className={styles.buildNft}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div
            className={`col-lg-6 col-md-6 col-sm-6 col-xs-12  ${styles.buildNftHeader}`}
          >
            <h1>
              Know How Building Your Own NFT Platorm Development Gains You An
              Upper Hand?
            </h1>
            <p>
              With our marketplace solution, you can launch your own digital
              asset marketplace comprising all the functionalities similar to
              the popular platforms. Our marketplace solution offers:
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            {data.map((item, index) => (
              <div className={styles.buildNftList}>
                <i class="fa-solid fa-check"></i>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildNftPlatform;
