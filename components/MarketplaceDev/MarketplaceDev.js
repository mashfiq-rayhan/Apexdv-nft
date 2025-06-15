import Image from "next/image";
import React from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./MarketplaceDev.module.css";

const MarketplaceDev = () => {
  const marketplaceDevTitle = {
    href: "/",
    butText: "Get Started",
  };

  const marketplaceDevData = [
    {
      id: 1,
      title: "NFT App Development",
      img: "/images/MarketplaceDev/nft-moblile-app.png",
      text: "Launch your own marketplace on a mobile app on both the native platforms with fantastic features.",
    },
    {
      id: 2,
      title: "NFT Website Development",
      img: "/images/MarketplaceDev/jumy-laptop-screen.png",
      text: "Put your hands on the Whitelabel marketplace solution and become the dynamite in the digital asset industry.",
    },
  ];
  return (
    <div className={styles.marketplaceDev}>
      <h2>
        NFT Marketplace Development On <br /> Various Platforms
      </h2>
      <div className="container">
        <div className="row">
          {marketplaceDevData.slice(0, 2).map((n) => (
            <div
              key={n.id}
              className={`col-lg-6 col-md-6 col-sm-12  ${styles.marketplaceDevPart}`}
            >
              <div className={styles.marketPlaceCard}>
                <Image src={n?.img} width="375" height="210" />                
                <h3>{n?.title}</h3>
                <p>{n?.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.marketplaceDevButton}>
          {/* <button className={styles.marketplaceDevButtonText}>
            {" "}
            <a href={marketplaceDevTitle.href}>{marketplaceDevTitle.butText}</a>
             
          </button> */}
          <ModalComponent btnText={marketplaceDevTitle.butText} className={styles.marketplaceDevButtonText}/>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDev;
