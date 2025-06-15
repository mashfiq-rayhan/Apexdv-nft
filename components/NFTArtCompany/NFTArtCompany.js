import React from "react";
import styles from "./NFTArtCompany.module.css";

const NFTArtCompany = () => {
  const nftArtCompanyImage = {
    img: "/images/JustLimitedNFT/IMAGE.png",
  };

  const nftArtCompanyData = [
    {
      id: 1,
      title: "Exclusive Design",
      text: "Entrepreneurs can start their dream of building a marketplace platform with exclusive design and features.",
      img: "/images/DevelopmentCompany/state-1 1.svg",
    },
    {
      id: 2,
      title: "Push Notifications",
      text: "An attractive feature that keeps users stay informed about newly listed assets and their price updates.",
      img: "/images/DevelopmentCompany/state-2 1.svg",
    },
    {
      id: 3,
      title: "Biometrics Authentication",
      text: "Biometrics Authentication inside our marketplace helps safeguard the exchange from theft.",
      img: "/images/DevelopmentCompany/state-3 1.svg",
    },
    {
      id: 4,
      title: "Multiple OS Support",
      text: "Our marketplace app comes with multiple OS support to support different devices and trading needs.",
      img: "/images/DevelopmentCompany/state-4 1.svg",
    },

    {
      id: 5,
      title: "Multiple Payment Methods",
      text: "The multiple payment methods inside the marketplace help the traders to manage trades effectively.",
      img: "/images/DevelopmentCompany/state-5 1.svg",
    },
    {
      id: 6,
      title: "Match Trading Engine",
      text: "Such a mobile-based technology helps match buy and sell orders performed in the trading network.",
      img: "/images/DevelopmentCompany/state-6 1.svg",
    },
    {
      id: 7,
      title: "Chatbot Encryption",
      text: "An end-to-end Chatbot encryption feature ensures secure transmission of messages.",
      img: "/images/DevelopmentCompany/state-7 1.svg",
    },
    {
      id: 8,
      title: "Add-on Security Features",
      text: "Enhanced security features inside the marketplace script ensure your trading platform is much more secure.",
      img: "/images/DevelopmentCompany/state-8 1.svg",
    },
  ];

  return (
    <div className={styles.NFTArtCompany}>
      <h2>A State Of The Art NFT Development Company</h2>
      <div className={`container ${styles.NFTArtCompanyPart}`}>
        <div className="row">
          <div
            className={`col-lg-6 col-md-6 col-sm-12  ${styles.NFTArtCompanyImage}`}
          >
            {/* <Image src={nftArtCompanyImage?.img} alt="" /> */}
            <img src={nftArtCompanyImage?.img} alt="" />
          </div>
          <div
            className={`col-lg-6 col-md-6 col-sm-12  ${styles.NFTArtCompanyCard}`}
          >
            {nftArtCompanyData.slice(0, 4).map((n) => (
              <div className={styles.NFTArtCompanyCardItam}>
                <img src={n?.img} alt="" />
                <h3 className="second-web-card-title">{n?.title}</h3>
                <p>{n?.text}</p>
              </div>
            ))}
          </div>

          <div
            className={`col-lg-12 col-md-6 col-sm-12  ${styles.NFTArtCompanyCard2}`}
          >
            {" "}
            {nftArtCompanyData.slice(4, 8).map((n) => (
              <div className={`${styles.NFTArtCompanyCardItam}`}>
               <img src={n?.img} alt="" />
                <h3 className="second-web-card-title">{n?.title}</h3>
                <p>{n?.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTArtCompany;
