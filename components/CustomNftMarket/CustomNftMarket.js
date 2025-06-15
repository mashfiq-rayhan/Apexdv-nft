import React from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import styles from "./CustomNftMarket.module.css";

const CustomNftMarket = () => {
    return (
         <div className="container">
      <div className={styles.customNftContainer}>
        <h1>Custom NFT Marketplace Development</h1>

        {/* <a className={styles.talkButton} href="#">
          Talk To Our Experts
        </a> */}

        <ModalComponent btnText={"Talk To Our Experts"} className={styles.talkButton}/>
      </div>
    </div>
    );
};

export default CustomNftMarket;