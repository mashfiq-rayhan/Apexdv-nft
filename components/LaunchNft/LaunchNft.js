import React from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./LaunchNft.module.css";

const LaunchNft = () => {
  return (
    <div className="container">
      <div className={`row d-flex align-items-center ${styles.launchNft}`}>
        <div
          className={`col-lg-6 col-md-12 col-sm-6 col-xs-12 ${styles.launchNftImg} `}
        >
          <img src="/images/own-solution.png" alt="" />
        </div>
        <div
          className={`col-lg-6 col-md-12 col-sm-6 col-xs-12 ${styles.launchNftInfo}`}
        >
          <h1>Launch Your Own NFT Marketplace</h1>
          <p>
            By creating your own digital assets marketplace solution, one can
            enlist the digital collectibles and enable the investors to buy,
            bid, or exchange on your platform. Get a fully customized White
            Label NFT Marketplace with us and begin the journey to enter the
            market to grab the huge customer base. Partner with us and don’t
            miss out on the chance to build a robust marketplace.
          </p>
          <div className={styles.startedButtonDiv}>
            {/* <a className={styles.startedButton} href="#">
              Get Started
            </a> */}
            <ModalComponent btnText={"Get Started"} className={styles.startedButton}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchNft;
