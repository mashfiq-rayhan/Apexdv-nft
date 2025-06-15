import Image from "next/image";
import React from "react";
import styles from "./OurLocations.module.css";

const OurLocations = () => {
  const ourLocationsData = [
    {
      id: 1,
      Image: "/images/OurLocations/uk-bg.png",
      title: "UK OFFICE",
      subTitle: "71-75 Shelton Street,Covent Garden, London, United Kingdom, WC2H 9JQ",
      text: "info@apexdv.com",
      text1: "+447361608597",
      logo: "/images/OurLocations/united-kingdom.png",
    },
    {
      id: 2,
      Image: "/images/OurLocations/usa-bg.png",
      title: "USA OFFICE",
      subTitle: "27 Colonial Village Shelton, Connecticut, 06484",
      text: "info@apexdv.com",
      text1: "+1203-892-6285",
      logo: "/images/OurLocations/united-states.png",
    },
    {
      id: 3,
      Image: "/images/OurLocations/BDbg.png",
      title: "BD OFFICE",
      subTitle: "2 Lalbag Road, Suite 6 East Kamrangirchar, Dhaka-1211",
      text: "info@apexdv.com",
      text1: "+8801964288131",
      logo: "/images/OurLocations/bangladesh.png",
    },
  ];

  return (
    <div className={styles.OurLocations}>
      <h2>Our Locations</h2>
      <div className="container">
        <div className="row">
          {ourLocationsData?.slice(0, 3)?.map((n) => (
            <div key={n.id} className={`col-lg-4 col-md-6 col-sm-12 ${styles.OurLocationCard}`}>
                <div className={styles.LocationCardLogo}>
                <Image width="60" height="60" src={n.logo} />
                </div>
                <div className={styles.LocationCardImage}>
                <Image width="100" height="250" src={n.Image} />
                </div>
                <h3>{n?.title}</h3>
                <h4>{n?.subTitle}</h4>
                <p>{n?.text}</p>
                <p>{n?.text1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLocations;
