import React from "react";
import styles from "./IncreaseTheProfit.module.css";

const IncreaseTheProfit = () => {
  const data = [
    {
      id: 1,
      image: "/images/IncreaseTheProfit/fee-1 1.svg",
      title: "Listing Fees",
      text: "On your marketplace, you can allow users to list their digital assets & charge the content creators to take their work for sale through listings.",
    },
    {
      id: 2,
      image: "/images/IncreaseTheProfit/fee-2 1.svg",
      title: "Transaction Fees",
      text: "For each transaction happening through your online marketplace, charge a small percentage as a gas fee for maintaining the marketplace.",
    },
    {
      id: 3,
      image: "/images/IncreaseTheProfit/fee-3 1.svg",
      title: "Initial Setup Fee",
      text: "A minimum initial setup fee can be charged to the digital creators who want to list their first digital collectible on your marketplace.",
    },
    {
      id: 4,
      image: "/images/IncreaseTheProfit/fee-4 1.svg",
      title: "Private Sale",
      text: "It might take some time to finalize an investor who could purchase the digital collectible. Leverage this opportunity to charge a fee from the seller.",
    },
    {
      id: 5,
      image: "/images/IncreaseTheProfit/fee-5 1.svg",
      title: "Minting Fee",
      text: "You can levy this charge on the creators to convert their art, music, or any digital file into valuable by paying a minting fee on the marketplace.",
    },
    {
      id: 6,
      image: "/images/IncreaseTheProfit/fee-6 1.svg",
      title: "Selling In Batches",
      text: "Charge a specific fee for executing on-chain transactions & gas fees from the content creators, or charge a flat price on the final price.",
    },
  ];
  return (
    <div className="container">
      <div className={styles.increaseTheProfit}>
        <h1>
          Increase The Profit Margins With Our NFT Marketplace App Revenue
          Models
        </h1>
        <div className={styles.increaseTheProfitInfo}>
          {data.map((item, index) => (
            <div className={styles.increaseTheProfitCard}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncreaseTheProfit;
