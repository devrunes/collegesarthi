import React from "react";
import styles from "./Photo.module.css";
import Image from "next/image";

export default function Photo(props) {
  const { src } = props;
  console.log(src);
  return (
    <div className={styles.ImageContainer}>
      <img src={src} alt="tick" layout="fill" />
    </div>
  );
}
