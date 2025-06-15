import React from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./BuildNftMarketPlace.module.css";

const BuildNftMarketPlace = () => {
  const data = [
    {
      id: 1,
      image: "/images/BuildNftMarketPlace/marketplace-raribale.png",
    },
    {
      id: 2,
      image: "/images/BuildNftMarketPlace/marketplace-oponsea.png",
    },
    {
      id: 3,
      image: "/images/BuildNftMarketPlace/decentland.png",
    },
    {
      id: 4,
      image: "/images/BuildNftMarketPlace/soperrare.png",
    },
    {
      id: 5,
      image: "/images/BuildNftMarketPlace/fondattion.png",
    },
    {
      id: 6,
      image: "/images/BuildNftMarketPlace/marketplace-nefti-gatwaey.png",
    },
    {
      id: 7,
      image: "/images/BuildNftMarketPlace/criptokites.png",
    },
    {
      id: 8,
      image: "/images/BuildNftMarketPlace/atom-markt.png",
    },
  ];
  return (
    <div className={styles.buildNftMarketPlace}>
      <div className="container">
        <h1>Build NFT Marketplace Like Below</h1>
        <div className={styles.buildNftMarketPlaceCards}>
          {data.map((item, index) => (
            <div className={styles.buildNftMarketPlaceCard}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <ModalComponent
        btnText={"Get Started"}
        className={styles.startedButton}
      />
    </div>
  );
};

export default BuildNftMarketPlace;
