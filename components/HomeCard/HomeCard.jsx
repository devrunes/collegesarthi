import Link from "next/link";
import React from "react";
import styles from "./HomeCard.module.css";

export default function HomeCard({ card }) {
  // console.log(card.links);
  if (!card) {
    return <div>card</div>;
  }
  return (
    <div>
      <div className={styles.homeExamsCard}>
        <div className={styles.topBar}>
          <Link href={`${card.url}`}>
            <h3>{card.examName}</h3>
          </Link>
          <button>Get Updates</button>
        </div>
        <div className={styles.middle}>
          <p>
            {card.prelog.substring(0, 300)}...
            <buton>
              <Link href={`${card.url}`}>
                <a>show more</a>
              </Link>
            </buton>
          </p>
        </div>
        <div className={styles.footer}>
          {Object.entries(card.links).map(([key, value], idx) => (
            // <Link href={`${card.url}#${value}`}>
              <a href={`${card.url}#${value}`} className={styles.footerLinks}>
                {key}
                {idx + 1 === Object.keys(card.links).length ? (
                  ""
                ) : (
                  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                )}
              </a>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
