import React from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import styles from "./NftDevCompany.module.css";

const NftDevCompany = () => {
    return (
        <div className="container">
      <div className={styles.nftDevContainer}>
        <h1>NFT Marketplace Development Company</h1>

        {/* <a className={styles.talkButton} href="#">
          Get Free Quote
        </a> */}
        
        <ModalComponent btnText={" Get Free Quote"} className={styles.talkButton}/>
      </div>
    </div>
    );
};

export default NftDevCompany;