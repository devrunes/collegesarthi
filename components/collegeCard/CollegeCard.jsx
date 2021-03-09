import React from "react";
import styles from "./collegeCard.module.css";
import Image from "next/image";

const CollegeCard = ({card}) => {
  console.log(card)
  return (
    <div>
      <div className={styles.clgCard_wrapper}>
        <div className={styles.clgCard_image}>
          <Image
            src="/college.png"
            alt="exam logo "
            layout="fill"
            quality={100}
            // unoptimized={true}
          />
        </div>
        <div className={styles.clgCard_main}>
          <div className={styles.clgCard_main_left}>
            <div className={styles.clgCard_main_name}>
              <h3>{card.name}</h3>
            </div>

            <div className={styles.clgCard_main_infosec}>
              <div>
                <div className={styles.clgCard_main_fee}>
                  <div className={styles.clgCard_rupee}>
                    <Image
                      src="/rupee.svg"
                      alt="exam logo "
                      layout="fill"
                      quality={100}
                      // unoptimized={true}
                    />
                  </div>
                  <div>
                    <p>{card.fee}</p>
                    <p className={styles.small}>yearly Fees</p>
                  </div>
                </div>
              </div>
              <div className={styles.clgCard_main_rating}>
                <p>10/10 Rating</p>
                <p className={styles.small}>MHRD Ranking</p>
              </div>
            </div>
          </div>
          <div className={styles.clgCard_main_right}>
            <div className={styles.clgCard_main_fee}>
              <div className={styles.clgCard_inlineImage}>
                <Image
                  src="/locationpin.svg"
                  alt="exam logo "
                  layout="fill"
                  quality={100}
                  // unoptimized={true}
                />
              </div>
              <div>
                <p>{card.location}</p>
              </div>
            </div>
            <div className={styles.clgCard_logoSec}>
              <div className={styles.clgCard_logoImage}>
                <Image
                  src="/clgLogo.png"
                  alt="exam logo "
                  layout="fill"
                  quality={100}
                  // unoptimized={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clgCard_footerButton}>Apply Now</div>
      </div>
    </div>
  );
};
export default CollegeCard;
