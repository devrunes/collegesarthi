import React, { useContext } from "react";
import styles from "./collegeCard.module.css";
import Image from "next/image";
import { ModelOpenContext } from "../../lib/authContext";

const CollegeCard = ({ card }) => {
  const [model, setModel] = useContext(ModelOpenContext);
  const handleApplyClick = () => {
    setModel({
      open: true,
      modelNo: 0,
      modelData: { collegeName: card.name },
    });
  };
  return (
    <div>
      <div className={styles.clgCard_wrapper}>
        <div className={styles.clgCard_image}>
          <img src={card.collegeImage || "/college.png"} alt="exam logo " />
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
                    <img src="/rupee.svg" alt="exam logo " />
                  </div>
                  <div>
                    <p>{card.fee}</p>
                    <p className={styles.small}>yearly Fees</p>
                  </div>
                </div>
              </div>
              <div className={styles.clgCard_main_rating}>
                <p>{card.rating || 10}/10 Rating</p>
                <p className={styles.small}>based on user reviews</p>
              </div>
            </div>
          </div>
          <div className={styles.clgCard_main_right}>
            <div className={styles.clgCard_main_fee}>
              <div className={styles.clgCard_inlineImage}>
                <img src="/locationPin.svg" alt="location pin" />
              </div>
              <div>
                <p>{card.location}</p>
              </div>
            </div>
            <div className={styles.clgCard_logoSec}>
              <div className={styles.clgCard_logoImage}>
                <img
                  src={card.logoImage || "/clgLogo.png"}
                  alt="college logo "
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clgCard_footerButton} onClick={handleApplyClick}>
          Apply Now
        </div>
      </div>
    </div>
  );
};
export default CollegeCard;
