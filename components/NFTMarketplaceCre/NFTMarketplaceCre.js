import Image from "next/image";
import React from "react";
import styles from "./NFTMarketplaceCre.module.css";

const NFTMarketplaceCre = () => {
  const marketplaceCreTitle = {
    title1: "NFT Marketplace Creation By Us Enables Users",
    title2: "To Effortlessly Trade The NFTs",
  };
  const marketplaceCreData = [
    {
      id: 1,
      Image: "/images/marketplaceCre/Group 5.png",
      title: "Inbuilt Wallet Feature",
      text: "Our asset marketplace script securely provides inbuilt digital wallets to store digital assets.",
    },
    {
      id: 2,
      Image: "/images/marketplaceCre/Group 6.png",
      title: "Create Collections More Easily",
      text: "Your online marketplace will hold a sole section of my collection with social links, profile, banner & more.",
    },
    {
      id: 3,
      Image: "/images/marketplaceCre/Group 8.png",
      title: "Create NFTs By Category",
      text: "With our marketplace, users can easily upload the work, title, and digital asset description.",
    },
    {
      id: 4,
      Image: "/images/marketplaceCre/Group 9.png",
      title: "Auction Feature",
      text: "Users can filter out between the auctions, fixed pricing listings and can sell the digital asset accordingly.",
    },
  ];

  return (
    <div className={styles.NftSoulations}>
      <div className="container">
        <h2>{marketplaceCreTitle.title1}</h2>
        <h2 id={styles.CreTitle}>{marketplaceCreTitle.title2}</h2>
        <div className="row">
          {marketplaceCreData?.slice(0, 4)?.map((n) => (
            <div key={n.id} className={"col-lg-6 col-md-6"}>
              <div className={styles.NftSoulationsCardItam}>
                <div className={styles.NftSoulationsimg}>
                  <Image width="120" height="120" src={n?.Image} alt="" />
                </div>
                <div className={styles.NftSoulationsInfo}>
                  <h5>{n.title}</h5>
                  <p>{n.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NFTMarketplaceCre;
