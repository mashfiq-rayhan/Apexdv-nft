import React from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./BuildNftMarket.module.css";

const BuildNftMarket = () => {
  return (
    <div className="container">
      <div className={styles.buildNftMarket}>
        <h1>Build NFT Marketplace</h1>
       {/*  <a className={styles.talkButton} href="#">
          Contact Us
        </a> */}
        <ModalComponent btnText={"Contact Us"} className={styles.talkButton}/>
      </div>
    </div>
  );
};

export default BuildNftMarket;
