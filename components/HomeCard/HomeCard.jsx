import React from "react";
import styles from "./HomeCard.module.css";

export default function HomeCard({ title }) {
  return (
    <div>
      <div className={styles.homeExamsCard}>
        <div className={styles.topBar}>
          <h3>{title}</h3>
          <button>Get Updates</button>
        </div>
        <div className={styles.middle}>
          <p>
            lorem ipsum dolor sit amet, consectetur adip non pro id element u et
            dolor in repieres amet
          </p>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
}
