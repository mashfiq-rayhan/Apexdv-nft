import React from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./NftMarketPlace.module.css";

const NftMarketPlace = () => {
  const data = [
    {
      id: 1,
      image: "/images/NftMarketPlace/use-case-1.png",
      title: "Music",
      text: "With your own marketplace, captivate the attention of music fans by providing them with the best interface offering deserve recognition to the masterpieces.",
      linkText: "Get a Demo",
    },
    {
      id: 2,
      image: "/images/NftMarketPlace/use-case-2.png",
      title: "Arts",
      text: "Showcase jaw-dropping and unique art pieces of artwork on your online marketplace and encircle art lovers worldwide to buy, exchange and sell rare arts.",
      linkText: "Get a Demo",
    },
    {
      id: 3,
      image: "/images/NftMarketPlace/use-case-3.png",
      title: "Games",
      text: "Online gaming is already trending as the hottest flame, therefore, take advantage of this flame and strike it by building a digital marketplace. Allow gamers to buy and sell unique assets.",
      linkText: "Get a Demo",
    },
    {
      id: 4,
      image: "/images/NftMarketPlace/use-case-4.webp",
      title: "Photography",
      text: "Allow users to mint their digital photographs on the Whitelabel marketplace, making them more special for the collectors to add to their collections.",
      linkText: "Get a Demo",
    },
    {
      id: 5,
      image: "/images/NftMarketPlace/use-case-5.webp",
      title: "Metaverse",
      text: "Now Develop your own NFT Marketplace in Metaverse. Metaverse NFT marketplace development is a technical process of developing a metaverse NFT marketplace platform.",
      linkText: "Get a Demo",
    },
    {
      id: 6,
      image: "/images/NftMarketPlace/use-case-6.webp",
      title: "Sports",
      text: "Launch a splendid marketplace for the sports enthusiast around the world to purchase, sell and hold virtual sports assets as per their interests and requirements.",
      linkText: "Get a Demo",
    },
  ];
  return (
    <div className={styles.nftMarketPlace}>
      <div className="container">
        <div className={styles.nftMarketPlaceContainer}>
          <h1>NFT Marketplace: Use Cases Beyond The Hype</h1>
          <div className={styles.nftMarketInfo}>
            {data.map((item, index) => (
              <div className={styles.nftMarketCard}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                {/* <a href="#">{item.linkText}</a> */}
                <ModalComponent
                  btnText={item.linkText}
                  className={styles.demoButton}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftMarketPlace;
