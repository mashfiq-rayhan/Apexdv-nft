import React from "react";
import styles from "./JustLimitedNFT.module.css";

const JustLimitedNFT = () => {
  const justLimitedNFTData = [
    {
      id: 1,
      Image: "/images/JustLimitedNFT/image 240.svg",
      title: "Open your ideas",
      text: "We will build you the most powerful Meme NFT Marketplace avatar evaluating your ideas.",
    },
    {
      id: 2,
      Image: "/images/JustLimitedNFT/image 241.svg",
      title: "Develop your Marketplace",
      text: "A roadmap will be employed for you to help visualize your project goals.",
    },
    {
      id: 3,
      Image: "/images/JustLimitedNFT/image 242.svg",
      title: "Swift Deployment ",
      text: " We ensure our clients with a whole successfully deployed Meme NFT Marketplace.",
    },
  ];

  return (
    <div className={styles.NftOwnMemesMain}>
      <h2>
        We Are Not Just Limited To NFT Marketplace <br /> Development
      </h2>
      <div className={`container ${styles.NftOwnMemes}`}>
        <div className={styles.NftOwnMemesLine}></div>
        <div className="row">
          {justLimitedNFTData?.slice(0, 3)?.map((n) => (
            <div
              key={n.id}
              className={`col-lg-4 col-md-4 col-sm-12 ${styles.MarketPlaceCard}`}
            >
              <div className={styles.nftAllMarketplace}>
                <div className={styles.NftSoulationsimg}>                
                  <img src={n?.Image} alt="" />
                </div>
                <div className={styles.NftOwnMemesInfo}>
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

export default JustLimitedNFT;
