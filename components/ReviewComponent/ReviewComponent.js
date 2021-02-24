import React, { useState } from "react";
import styles from "./Review.module.scss";

export default function ReviewComponent({ ques, currentStep, setCurrentStep }) {
  const [ans, setAns] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navElements = [
    "Admission",
    "Academics and Faculty",
    "Fees and scholarship",
    "Infrastructure",
    "Hostels and mess",
    "Placements and Internships",
    "Clubs and Associations",
    "Higher Studies",
  ];
  const [rating, setRating] = useState(-1);
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(ans);
  return (
    <div className={styles.reviewWrapper}>
      <nav className={styles.nav}>
        {navElements.map((ele, index) => (
          <div
            key={index}
            className={index === currentStep - 3 ? styles.selected : ""}
            onClick={() => setCurrentStep(index + 3)}
          >
            {ele}
          </div>
        ))}
      </nav>
      <div className={styles.main}>
        <label>{ques}</label>
        <textarea
          value={ans}
          onChange={(e) => setAns(e.target.value)}
          className={styles.textarea}
        />
        <div className={styles.ratingsSection}>
          <label>Rate the overall experience</label>
          <div className={styles.ratingWrapper}>
            {ratings.map((ele, index) => (
              <div
                key={index}
                className={`${styles.rating} ${
                  ele <= rating ? styles.selected : ""
                }`}
                onClick={() => setRating(index + 1)}
              >
                {ele}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.actionBtnWrapper}>
          <button
            className={styles.backBtn}
            onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
          >
            Back
          </button>
          <input
            type="submit"
            onClick={() => setCurrentStep((currentStep) => currentStep + 1)}
            // onClick={handleSaveBtn}
            className={styles.saveBtn}
            value="Save and next"
          />
        </div>
      </div>
    </div>
  );
}
