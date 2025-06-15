import Image from "next/image";
import React from "react";
import styles from "./MostReliableNFT.module.css";

const MostReliableNFT = () => {
  const mostReliableNftData = [
    {
      id: 1,
      title: "Most Recommended Set Of Features",
      list: [
        {
          id: 1,
          text: "Tracing transactions",
        },
        {
          id: 2,
          text: "Wallet Preference Specification",
        },
        {
          id: 3,
          text: "Easily track user activity",
        },
      ],
    },
    {
      id: 2,
      title: "New Additions",
      list: [
        {
          id: 1,
          text: "Listing assets",
        },
        {
          id: 2,
          text: "Categorized efficiently",
        },
        {
          id: 3,
          text: "Ranking and Performance Statistics",
        },
      ],
    },
  ];
  return (
    <div className={styles.MostReliableNFT}>
      <div className={`container ${styles.MostReliableNftPart}`}>
        <div className="row">
          <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.MostNftImage}`}>
            <div className={styles.NftImage}>
              <Image
                width="555"
                height="550"
                src={"/images/MostReliableNFT/fill-hands.png"}
              />
            </div>
          </div>
          <div
            className={`col-lg-6 col-md-6 col-sm-12 ${styles.MostNftTextCard}`}
          >
            <h2>Fill Your Hands With The Most Reliable NFT Marketplace App</h2>
            <p>
              At Suffescom, we offer an advanced marketplace app for mobile
              native platforms to help you stand apart in the digital space.
            </p>

            {mostReliableNftData?.map((n) => (
              <div className={styles.MostNftCardItam}>
                <div className={styles.MostNftCardItamInfo}>
                  <h3>{n?.title}</h3>
                  {n?.list?.map((m) => (
                    <div className={styles.NftCardItam}>
                      <i class="fa-solid fa-check"></i>
                      <p>{m?.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostReliableNFT;
