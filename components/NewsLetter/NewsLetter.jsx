import React from "react";
import styles from "./NewsLetter.module.scss";

export default function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.topbar}>
        <img src="newsletter.svg" alt="subscribe to newsletter" />
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>Subscribe to our newsletter</div>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefit}>College Notifications</div>
            <div className={styles.benefit}>Exam Notifications</div>
            <div className={styles.benefit}>Important Dates</div>
            <div className={styles.benefit}>News Update</div>
          </div>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
        <input
          type="number"
          name="number"
          placeholder="Mobile Number"
          className={styles.input}
        />
        <select className={styles.input}>
          <option value="Btech">Btech</option>
          <option value="MBA">MBA</option>
        </select>
        <button className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
}
