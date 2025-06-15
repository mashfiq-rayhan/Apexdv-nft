import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      image: "/images/WhyChooseUs/ft-cost-effective 1.svg",
      title: "Cost-effective",
      text: "Get cost-effective solutions and all the latest features inbuilt in your application.",
    },
    {
      id: 2,
      image: "/images/WhyChooseUs/ft-support 1.svg",
      title: "24/7 Support",
      text: "Get the most practical solutions for technical issues related to the app. We are available 24/7.",
    },
    {
      id: 3,
      image: "/images/WhyChooseUs/ft-seprate-app 1.svg",
      title: "Separate Apps for All",
      text: "There are separate apps for customers and service providers and panel for admin.",
    },
    {
      id: 4,
      image: "/images/WhyChooseUs/ft-customization 1.svg",
      title: "Customization",
      text: "Shine among your competitors by customizing the application based on your requirements.",
    },
    {
      id: 5,
      image: "/images/WhyChooseUs/ft-your-app 1.svg",
      title: "Your App, Your Brand",
      text: "Launch your own assets minting marketplace with your own brand name and brand logo.",
    },
    {
      id: 6,
      image: "/images/WhyChooseUs/ft-job-allocation 1.svg",
      title: "Smart Job Allocation",
      text: "Manage your entire Marketplace platform through a single admin dashboard.",
    },
  ];
  return (
    <div className="container">
      <div className={styles.whyChooseUs}>
        <h1>Why Choose Us For NFT Website Development?</h1>
        <div className={styles.whyChooseUsInfo}>
          {data.map((item, index) => (
            <div className={styles.whyChooseUsCard}>
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

export default WhyChooseUs;
