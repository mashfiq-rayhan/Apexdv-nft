import React from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./CreateNft.module.css";

const CreateNft = () => {
  return (
    <div className="container">
      <div className={styles.createNftContainer}>
        <h1>Create Your Own NFT Marketplace</h1>

        {/* <a className={styles.talkButton} href="#">
          Talk To Our Experts
        </a> */}
        <ModalComponent btnText={"Talk To Our Experts"} className={styles.talkButton}/>
      </div>
    </div>
  );
};

export default CreateNft;
