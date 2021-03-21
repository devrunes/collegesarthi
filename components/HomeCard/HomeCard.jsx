import React, { useContext } from "react";
import Link from "next/link";
import styles from "./HomeCard.module.css";
import { AuthOpenContext } from "../../lib/authContext";
import { useAuth } from "../../lib/auth";

export default function HomeCard({ card }) {
  const { auth } = useAuth();
  const [authOpen, setAuthOpen] = useContext(AuthOpenContext);

  const handleGetUpdateClick = () => {
    setAuthOpen(!authOpen);
  };

  if (!card) {
    return "";
  }

  return (
    <div>
      <div className={styles.homeExamsCard}>
        <div className={styles.topBar}>
          <Link href={`${card && card.url}`}>
            <a>
              <h3>{card.examName}</h3>
            </a>
          </Link>
          {auth && auth.isLogin ? (
            ""
          ) : (
            <button onClick={handleGetUpdateClick}>Get Updates</button>
          )}
        </div>
        <div className={styles.middle}>
          <p>
            {card.prelog.substring(0, 300)}...
            <Link href={`${card && card.url}`}>
              <a>show more</a>
            </Link>
          </p>
        </div>
        <div className={styles.footer}>
          {
            card.links.map(sub => (
              Object.entries(sub).map(([key, value]) => (
                <Link
                  key={key + value}
                  href={`${card.url}#${value}`}
                  prefetch={false}
                >
                  <a className={styles.footerLinks}> {key} |&nbsp; </a>
                </Link>
              ))
            ))
          }
        </div>
      </div>
    </div>
  );
}
