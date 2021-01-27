import React from "react";
import NavStream from "../../components/NavStream/NavStream";
import styles from "../../styles/ExamArticle.module.css";

const ExmaArticle = () => {
  return (
    <div>
      <NavStream />
      <div className={styles.ExamHeadingContainer}>
        <h1 className={styles.ExamHeading}>
          JEE Main Exam 2021 Guide | JEE Main Exam Date 2021 | Reservation and
          Eligibility Criteria | Exam Pattern | JEE Main 2021 Highlights
        </h1>
        <button className={styles.ExamGetUpdateButton}>Get Updates</button>
      </div>
      
    </div>
  );
};

export default ExmaArticle;
