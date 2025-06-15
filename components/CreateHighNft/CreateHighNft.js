import React from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./CreateHighNft.module.css";

const CreateHighNft = () => {
  return (
    <div className="container">
      <div className={`row d-flex align-items-center ${styles.createHighNft}`}>
        <div
          className={`col-lg-6 col-md-12 col-sm-6 col-xs-12 ${styles.createHighNftImg} `}
        >
          <img src="/images/discuss-project.png" alt="" />
        </div>

        <div
          className={`col-lg-6 col-md-12 col-sm-6 col-xs-12 ${styles.createHighNftInfo}`}
        >
          <h1>Let Us Create A High-performing NFT Marketplace For You!</h1>
          <p>
            Tell us about your Marketplace project idea, and we will provide you
            with customized NFT Website Development solutions allowing you to
            stand out in the market.
          </p>
          <div className={styles.touchButtonDiv}>
            <ModalComponent
              btnText={"Get in Touch"}
              className={styles.touchButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHighNft;
