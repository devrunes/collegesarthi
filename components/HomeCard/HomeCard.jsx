import Link from "next/link";
import React from "react";
import styles from "./HomeCard.module.css";

export default function HomeCard({ card }) {
  // console.log(card.links);
  return (
    <div>
      <div className={styles.homeExamsCard}>
        <div className={styles.topBar}>
          {/* <h3>{card.examName}</h3> */}
          <button>Get Updates</button>
        </div>
        <div className={styles.middle}>
          {/* <p>{card.prelog.substring(0, 300)}...<buton>
            <Link href={`${card.url}`}>
            <a>show more</a>
            </Link>
            </buton></p> */}
        </div>
        <div className={styles.footer}>
          {/* {
            Object.entries(card.links).map(([key, value])=>(
              <Link href={`${card.url}#${value}`} >
              <a className={styles.footerLinks}> {key} |&nbsp; </a>
              </Link>
            ))
          } */}
        </div>
      </div>
    </div>
  );
}
