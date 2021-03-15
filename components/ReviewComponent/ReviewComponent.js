import React, { useState } from "react";
import styles from "./Review.module.scss";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import checkmark from "../../assets/check.gif";

export default function ReviewComponent({
  ques,
  currentStep,
  setCurrentStep,
  reviewId,
  ans,
  rating,
  handleReviewComponentChange,
  fieldKey,
  reviewValues,
}) {
  const [isCompleted, setIsCompleted] = useState(false);
  //   const [ans, setAns] = useState(answer);
  const [ansError, setAnsError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [scholarshipReceivedError, setScholarshipReceivedError] = useState("");
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
  //   const [rating, setRating] = useState(reviewRatings);
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const router = useRouter();

  const handleSaveBtn = async () => {
    if (currentStep === 5) {
      if (
        reviewValues[fieldKey].scholarshipGiven &&
        reviewValues[fieldKey].scholarshipReceived.length === 0
      ) {
        setScholarshipReceivedError("This is a required field");
      } else {
        setScholarshipReceivedError("");
      }
      if (
        !reviewValues[fieldKey].scholarshipProvided ||
        !reviewValues[fieldKey].scholarshipGiven ||
        reviewValues[fieldKey].scholarshipReceived.length === 0
      ) {
        const res = await axios.post("/api/review", {
          reviewId,
          currentStep,
          payload: { ...reviewValues },
        });
        if (currentStep <= 8) setCurrentStep((currentStep) => currentStep + 1);
      }
      return;
    }
    if (ans.length === 0) {
      setAnsError("This is a required field");
    } else {
      setAnsError("");
    }
    if (rating === -1) {
      setRatingError("This is a required field");
    } else {
      setRatingError("");
    }
    if (ans.length > 0 && rating >= 0) {
      const res = await axios.post("/api/review", {
        reviewId,
        currentStep,
        payload: { [fieldKey]: { ans, rating } },
      });
      if (currentStep <= 9) setCurrentStep((currentStep) => currentStep + 1);
      else {
        setIsCompleted(true);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    }
  };

  if (currentStep === 5) {
    return (
      <div className={styles.reviewWrapper}>
        <nav className={styles.nav}>
          {navElements.map((ele, index) => (
            <div
              key={index}
              className={index === currentStep - 3 ? styles.selected : ""}
              onClick={() => {
                if (index < currentStep - 3) setCurrentStep(index + 3);
              }}
            >
              {ele}
            </div>
          ))}
        </nav>
        <div className={styles.main}>
          <div className={styles.formRow}>
            <label>Does your college provide Scholarship?</label>
            <div className={styles.formRadioRow}>
              <div className={styles.radioInput}>
                <input
                  type="radio"
                  name="scholarshipProvided"
                  value={true}
                  checked={reviewValues[fieldKey].scholarshipProvided}
                  onChange={(e) =>
                    handleReviewComponentChange(
                      e.target.value,
                      fieldKey,
                      "scholarshipProvided"
                    )
                  }
                />{" "}
                Yes
              </div>
              <div className={styles.radioInput}>
                <input
                  type="radio"
                  name="scholarshipProvided"
                  value={false}
                  checked={!reviewValues[fieldKey].scholarshipProvided}
                  onChange={(e) =>
                    handleReviewComponentChange(
                      e.target.value,
                      fieldKey,
                      "scholarshipProvided"
                    )
                  }
                />{" "}
                No
              </div>
            </div>
          </div>
          {reviewValues[fieldKey]?.scholarshipProvided && (
            <div className={styles.formRow}>
              <label>Did you receive a Scholarship?</label>
              <div className={styles.formRadioRow}>
                <div className={styles.radioInput}>
                  <input
                    type="radio"
                    name="scholarshipGiven"
                    value={true}
                    checked={reviewValues[fieldKey].scholarshipGiven}
                    onChange={(e) =>
                      handleReviewComponentChange(
                        e.target.value,
                        fieldKey,
                        "scholarshipGiven"
                      )
                    }
                  />{" "}
                  Yes
                </div>
                <div className={styles.radioInput}>
                  <input
                    type="radio"
                    name="scholarshipGiven"
                    value={false}
                    checked={!reviewValues[fieldKey].scholarshipGiven}
                    onChange={(e) =>
                      handleReviewComponentChange(
                        e.target.value,
                        fieldKey,
                        "scholarshipGiven"
                      )
                    }
                  />{" "}
                  No
                </div>
              </div>
            </div>
          )}
          {reviewValues[fieldKey].scholarshipProvided &&
            reviewValues[fieldKey].scholarshipGiven && (
              <div className={styles.formRow}>
                <label>How much Scholarship did you receive?</label>
                <input
                  type="text"
                  name="scholarshipReceived"
                  className={styles.formSelectInput}
                  value={reviewValues[fieldKey].scholarshipReceived}
                  onChange={(e) =>
                    handleReviewComponentChange(
                      e.target.value,
                      fieldKey,
                      "scholarshipReceived"
                    )
                  }
                />
                {scholarshipReceivedError ? (
                  <p className={styles.error}>{scholarshipReceivedError}</p>
                ) : null}
              </div>
            )}
          <div className={styles.actionBtnWrapper}>
            <button
              className={styles.backBtn}
              onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
            >
              Back
            </button>
            <input
              type="submit"
              onClick={handleSaveBtn}
              className={styles.saveBtn}
              value="Save and next"
            />
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 10) {
    return (
      <div className={styles.reviewWrapper}>
        <nav className={styles.nav}>
          {navElements.map((ele, index) => (
            <div
              key={index}
              className={index === currentStep - 3 ? styles.selected : ""}
              onClick={() => {
                if (index < currentStep - 3) setCurrentStep(index + 3);
              }}
            >
              {ele}
            </div>
          ))}
        </nav>
        <div className={styles.main}>
          <div className={styles.formRow}>
            <label>Which Course do you want to Pursue?</label>
            <select
              name="course"
              className={styles.formSelectInput}
              value={reviewValues.course}
              onChange={(e) =>
                handleReviewComponentChange(e.target.value, fieldKey, "course")
              }
            >
              <option value="JIIT">JIIT</option>
              <option value="IITD">IITD</option>
            </select>
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
              onClick={handleSaveBtn}
              className={styles.saveBtn}
              value="Save and next"
            />
          </div>
        </div>
      </div>
    );
  }

  return isCompleted ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Image src={checkmark} alt="done" width={300} height={300} />
      Your review has been successfully completed and our team will reach out to
      you in 2 to 3 working days
    </div>
  ) : (
    <div className={styles.reviewWrapper}>
      <nav className={styles.nav}>
        {navElements.map((ele, index) => (
          <div
            key={index}
            className={index === currentStep - 3 ? styles.selected : ""}
            onClick={() => {
              if (index < currentStep - 3) setCurrentStep(index + 3);
            }}
          >
            {ele}
          </div>
        ))}
      </nav>
      <div className={styles.main}>
        <label>{ques}</label>
        <textarea
          value={ans}
          onChange={(e) =>
            handleReviewComponentChange(e.target.value, fieldKey, "ans")
          }
          className={styles.textarea}
        />
        {ansError ? <p className={styles.error}>{ansError}</p> : null}
        <div className={styles.ratingsSection}>
          <label>Rate the overall experience</label>
          <div className={styles.ratingWrapper}>
            {ratings.map((ele, index) => (
              <div
                key={index}
                className={`${styles.rating} ${
                  ele <= rating ? styles.selected : ""
                }`}
                onClick={() =>
                  handleReviewComponentChange(index + 1, fieldKey, "rating")
                }
              >
                {ele}
              </div>
            ))}
          </div>
          {ratingError ? <p className={styles.error}>{ratingError}</p> : null}
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
            // onClick={() =>}
            onClick={handleSaveBtn}
            className={styles.saveBtn}
            value="Save and next"
          />
        </div>
      </div>
    </div>
  );
}
