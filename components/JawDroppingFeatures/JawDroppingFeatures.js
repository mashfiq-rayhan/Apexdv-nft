import React from "react";
import styles from "./JawDroppingFeatures.module.css";

const JawDroppingFeatures = () => {
  const data = [
    {
      id: 1,
      image: "/images/Jaw Dropping Features/dropping-features-1 1.svg",
      title: "Storefront",
      text: "The storefront of your Marketpalce contains all the information you would need to know.",
    },
    {
      id: 2,
      image: "/images/Jaw Dropping Features/dropping-features-2 1.svg",
      title: "Filters",
      text: "Using this feature, find digital assets of your choice from thousands displayed on the marketplace.",
    },
    {
      id: 3,
      image: "/images/Jaw Dropping Features/dropping-features-3 1.svg",
      title: "Search",
      text: "Click on search bar, type the name, content creator, and hashtag & let the marketplace do the magic!",
    },
    {
      id: 4,
      image: "/images/Jaw Dropping Features/dropping-features-4 1.svg",
      title: "Create Listings",
      text: "Our marketplace solution is designed so that creating & submitting the virtual collectible cakewalk.",
    },
    {
      id: 5,
      image: "/images/Jaw Dropping Features/dropping-features-5 1.svg",
      title: "Buy And Bid",
      text: "Our marketplace platform is armed with this critical feature to help you to buy and sell minted assets.",
    },
    {
      id: 6,
      image: "/images/Jaw Dropping Features/dropping-features-6 1.svg",
      title: "Wallet",
      text: "Seamlessly store and receive the assets on our marketplace with the integrated digital wallet.",
    },
  ];
  return (
    <div className="container">
      <div className={styles.jawDroppingFeatures}>
        <h1>Jaw-Dropping Features Of Our NFT Marketplace Creation Services</h1>
        <div className={styles.jawDroppingFeaturesInfo}>
          {data.map((item, index) => (
            <div className={styles.jawDroppingFeaturesCard}>
              <div className={styles.jawDroppingFeaturesCardImg}>
                <img src={item.image} alt="" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JawDroppingFeatures;
