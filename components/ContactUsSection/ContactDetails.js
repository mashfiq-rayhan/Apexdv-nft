import Image from "next/image";
import React from "react";
import styles from "./ContactDetails.module.css";

const dummyData = [
  {
    id: 1,
    text: "Signed NDA to keep all project-related information confidential",
  },
  {
    id: 2,
    text: "Free consultation for your project.",
  },
  {
    id: 3,
    text: "Transparent pricing policy.",
  },
  {
    id: 4,
    text: "Flexible engagement models",
  },
  {
    id: 5,
    text: "SWIFT kick start to your project.",
  },
  {
    id: 6,
    text: "We always deliver the source code with the project.",
  },
];

export default function ContactDetails() {
  return (
    <div className={styles.details_container}>
      {dummyData.map((data) => (
        <div className={styles.details} id={data.id}>
          <Image
            src="/images/tick.svg"
            alt="Picture of the author"
            width={25}
            height={25}
          />
          <p className={styles.details_text}>{data.text}</p>
        </div>
      ))}
    </div>
  );
}
